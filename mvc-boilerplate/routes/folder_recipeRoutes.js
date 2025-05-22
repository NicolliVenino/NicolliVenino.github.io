const express = require('express');
const router = express.Router();
const Folder_RecipeController = require('../controllers/folder_recipeController');

// Endpoint para adicinar uma receita em uma pasta
router.post('/recipeinfolder', Folder_RecipeController.adicionarReceita);

router.get('/recipeinfolder', Folder_RecipeController.listarPastasReceitas);

router.get('/recipeinfolder/:id', Folder_RecipeController.obterPastaReceita);

router.delete('/recipeinfolder/:id', Folder_RecipeController.deletarPastaReceita);

module.exports = router;