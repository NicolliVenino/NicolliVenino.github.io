const express = require('express');
const router = express.Router();
const Folder_RecipeController = require('../controllers/folder_recipeController');

// Endpoint para adicinar uma receita em uma pasta
router.post('/recipeinfolder', Folder_RecipeController.adicionarReceita);

// Endpoint para listar receitas em pastas
router.get('/recipeinfolder', Folder_RecipeController.listarPastasReceitas);

// Endpoint para obter receita em uma pasta
router.get('/recipeinfolder/:id', Folder_RecipeController.obterPastaReceita);

// Endpoint para deletar receita em uma pasta
router.delete('/recipeinfolder/:id', Folder_RecipeController.deletarPastaReceita);

module.exports = router;