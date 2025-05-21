const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipeController');

// Endpoint para listar todos os usuários
router.get('/recipes', RecipeController.listarReceitas);

// Endpoint para obter um usuário específico pelo ID
router.get('/recipes/:id', RecipeController.obterReceita);

// Endpoint para criar um novo usuário
router.post('/recipes', RecipeController.criarReceita);

module.exports = router;
