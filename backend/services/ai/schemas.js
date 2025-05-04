const { z } = require("zod");

const nodeSchema = z.object({
  name: z.string(),
  content: z.string(),
  children: z.array(z.object({
    name: z.string(),
    content: z.string(),
    children: z.array(z.object({
      name: z.string(),
      content: z.string(),
      children: z.array(z.string()).optional() // Limit nesting to 3 levels
    }))
  }))
});

const productsSchema = z.object({
  productsList: z.array(z.object({
    name: z.string(),
    reason: z.string(),
    sustainabilityScore: z.number(),
    topics: z.array(z.string()).max(4),
    alternatives: z.array(z.object({
      name: z.string(),
      reason: z.string(),
      sustainabilityScore: z.number().min(1).max(10),
      environmentalImpact: z.string().optional(),
    }))
  }))
});

module.exports = {
  productsSchema,
  nodeSchema
};