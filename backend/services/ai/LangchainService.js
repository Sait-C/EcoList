const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { productsSchema, nodeSchema } = require("./schemas");
const { HumanMessage } = require("@langchain/core/messages");
const { client, GenerationStyle, Status } = require("imaginesdk");

class LangchainService {
  constructor() {
    this.model = new ChatGoogleGenerativeAI({
      apiKey: process.env.GEMINI_API_KEY,
      model: "gemini-2.0-flash",
    });

    this.imagine = client(`${process.env.IMAGINEART_API_KEY}`);
  }

  /**
   * Analyzes a list of products to provide healthy and sustainable alternatives.
   * The method takes a shopping list as input and returns structured data containing alternative product suggestions
   * along with their sustainability scores and reasoning.
   */
  async analyzeProducts(productsList, language = "en") {
    const prompt = `
      Analyze this shopping list and provide healthy and sustainable alternatives.
      For each product, provide 2-3 alternatives with reasons and sustainability scores (1-10).
      For each product, also provide relevant topics that help users understand:
      - Environmental impact during production and transportation
      - Recycling and waste management considerations
      - Ingredients and material composition
      - Health implications and nutritional value
      - Social and ethical aspects of production
      - Carbon footprint and energy consumption
      - Water usage and conservation
      - Packaging and its environmental effects
      - Local vs global sourcing impacts
      - Long-term sustainability factors
      - Other relevant topics
      Don't be too specific, just provide general topics. Topics should be short and concise.
      
      For each alternative, also provide a clear, detailed prompt that can be used to generate
      an image of the alternative product. The prompt should focus on the visual aspects
      and sustainable features of the product and imagePrompt must be in english.

      Important: Provide the response in ${language} language.
      Important: imagePrompt must be in english.
      
      Format the response exactly like this example:
      {
        "data": [
          {
            "originalProduct": "white bread",
            "alternatives": [
              {
                "name": "whole grain bread",
                "reason": "Higher in fiber and nutrients",
                "sustainabilityScore": 8,
                "environmentalImpact": "Lower carbon footprint in production",
                "imagePrompt": "A fresh loaf of artisanal whole grain bread with visible seeds and grains, warm brown color, crusty exterior, on a rustic wooden surface"
              }
            ]
          }
        ]
      }

      Shopping list:
      ${productsList}
    `;

    const structuredLlm = this.model.withStructuredOutput(productsSchema);
    let result = await structuredLlm.invoke(prompt);
    
    result = await this.generateImagesForAlternatives(result);

    return result;
  }

  // TODO: Mix this with the analyzeProducts method
  /**
   * Analyzes an image containing a shopping list.
   * The method takes an image file as input and returns structured data containing
   * the extracted products and their analyses.
   */
  async analyzeImageToGetProducts(imageFile, language = "en") {
    const prompt = `
      Analyze this image of a shopping list and extract the products.
      For each product, provide 2-3 healthy and sustainable alternatives.
      Include a reason and sustainability score (1-10) for each alternative.
      For each product, also provide relevant topics that help users understand:
      - Environmental impact during production and transportation
      - Recycling and waste management considerations
      - Ingredients and material composition
      - Health implications and nutritional value
      - Social and ethical aspects of production
      - Carbon footprint and energy consumption
      - Water usage and conservation
      - Packaging and its environmental effects
      - Local vs global sourcing impacts
      - Long-term sustainability factors
      - Other relevant topics
      Don't be too specific, just provide general topics. Topics should be short and concise.
      For each alternative, also provide a clear, detailed prompt that can be used to generate
      an image of the alternative product. The prompt should focus on the visual aspects
      and sustainable features of the product and imagePrompt must be in english.
      
      Important: Provide the response in ${language} language.
      Important: imagePrompt must be in english.

      Format the response exactly like this example:
      {
        "data": [
          {
            "originalProduct": "white bread",
            "alternatives": [
              {
                "name": "whole grain bread",
                "reason": "Higher in fiber and nutrients",
                "sustainabilityScore": 8,
                "environmentalImpact": "Lower carbon footprint in production",
                "imagePrompt": "A fresh loaf of artisanal whole grain bread with visible seeds and grains, warm brown color, crusty exterior, on a rustic wooden surface"
              }
            ]
          }
        ]
      }
    `;

    const base64Image = imageFile.data.toString("base64");

    const message = new HumanMessage({
      content: [
        { type: "text", text: prompt },
        {
          type: "image_url",
          image_url: {
            url: `data:${imageFile.mimetype};base64,${base64Image}`,
          },
        },
      ],
    });

    const structuredLlm = this.model.withStructuredOutput(productsSchema);
    let result = await structuredLlm.invoke([message]);
    
    result = await this.generateImagesForAlternatives(result);

    return result;
  }

  /**
   * Creates an information tree about a product.
   * The method takes a product name and a topic, and returns a structured data containing
   * an information tree about the product.
   */
  async createNodes(name, topic, language = "en") {
    const prompt = `
    Create an information tree about the product "${name}" focusing on the topic "${topic}".
    The tree should have:
    1. A root node with the product name and general description
    2. 2-3 main category nodes as children
    3. 2-3 specific detail nodes under each category
    
    Important: Provide the response in ${language} language.
    
    Format the response exactly like this example:
    {
      "name": "Product Name",
      "content": "General description",
      "children": [
        {
          "name": "Category 1",
          "content": "Category description",
          "children": [
            {
              "name": "Detail 1",
              "content": "Specific information",
              "children": []
            }
          ]
        }
      ]
    }
    `;

    const structuredLlm = this.model.withStructuredOutput(nodeSchema);
    const result = await structuredLlm.invoke(prompt);
    return result;
  }

  async generateImage(prompt) {
    try {
      const response = await this.imagine.generations(prompt, {});
      if (response.status() === Status.OK) {
        const image = response.getOrThrow();
        const base64Image = image.asImageSrc();
        return base64Image;
      } else {
        console.log(response.errorOrThrow());
      }
      return base64Image;
    } catch (error) {
      console.error("Error generating image:", error);
      return null;
    }
  }

  async generateImagesForAlternatives(result) {
    for (const product of result.productsList) {
      for (const alternative of product.alternatives) {
        alternative.imageBase64 = await this.generateImage(
          alternative.imagePrompt
        );
      }
    }
    return result;
  }
}

module.exports = {
  aiService: new LangchainService(),
};
