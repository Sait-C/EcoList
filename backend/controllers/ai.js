const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const { aiService } = require("../services/ai/LangchainService");

// @desc Analyze products list
// @route POST /api/v1/ai/analyze-list
// @access Public
exports.analyzeProductsList = asyncHandler(async (req, res, next) => {
  const productsList = req.body?.productsList;
  const language = req.query.lang || 'en';
  
  if (!productsList && !req.files) {
    return next(new ErrorResponse("Please provide a shopping list or image", 400));
  }

  let result;
  if (req.files && req.files.file) {
    result = await aiService.analyzeImageToGetProducts(req.files.file, language);
  } else {
    result = await aiService.analyzeProducts(productsList, language);
  }

  res.status(200).json({
    success: true,
    data: result,
  });
});

// @desc Create information tree
// @route POST /api/v1/ai/create-information-tree
// @access Public
exports.createInformationTree = asyncHandler(async (req, res, next) => {
  const { name, topic } = req.body;
  const language = req.query.lang || 'en';

  if (!name || !topic) {
    return next(new ErrorResponse("Please provide a name and choice", 400));
  }

  const informationTree = await aiService.createNodes(name, topic, language);

  res.status(200).json({
    success: true,
    data: informationTree,
  });
});
