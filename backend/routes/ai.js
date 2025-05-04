const express = require('express');
const router = express.Router();
const { analyzeProductsList, createInformationTree } = require('../controllers/ai');
const photoUpload = require('../middleware/photoUpload');

router.post('/analyze-list', photoUpload('file', false), analyzeProductsList);
router.post('/create-information-tree', createInformationTree);

module.exports = router; 