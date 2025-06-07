const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipeController');

// Endpoint para listar todas as receitas
router.get('/recipes', RecipeController.listarReceitas);

// Endpoint para obter uma receita a partir do id
router.get('/recipes/:id', RecipeController.obterReceita);

// Endpoint para criar uma receita
router.post('/recipes', RecipeController.criarReceita);

// Endpoint para deletar uma receita
router.delete('/recipes/:id', RecipeController.deletarReceita);

router.get('/dashboard', RecipeController.renderizarDashboard);

module.exports = router;
