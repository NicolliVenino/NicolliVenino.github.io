const express = require('express');
const router = express.Router();
const Recipe_IngredientController = require('../controllers/recipe_ingredientController');

// Endpoint para listar ingredientes de uma receita
router.get('/ingredientinrecipe', Recipe_IngredientController.listar_ingrediente_da_receita);

// Endpoint para obter um ingrediente de uma receita
router.get('/ingredientinrecipe/:id', Recipe_IngredientController.obter_ingrediente_da_receita);

// Endpoint para colocar um ingrediente em uma receita
router.post('/ingredientinrecipe', Recipe_IngredientController.ingrediente_da_receita);

// Endpoint deletar um ingrediente de uma receita
router.delete('/ingredientinrecipe/:id', Recipe_IngredientController.deletar_ingrediente_da_receita);

module.exports = router;