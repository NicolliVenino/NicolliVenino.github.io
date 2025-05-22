const express = require('express');
const router = express.Router();
const Folder_RecipeController = require('../controllers/folder_recipeController');

// Endpoint para adicinar uma receita em uma pasta
router.post('/recipeinfolder', Folder_RecipeController.adicionarReceita);

module.exports = router;