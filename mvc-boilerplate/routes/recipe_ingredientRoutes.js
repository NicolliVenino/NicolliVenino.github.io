const express = require('express');
const router = express.Router();
const Recipe_IngredientController = require('../controllers/recipe_ingredientController');

// Endpoint para adicinar uma receita em uma pasta
router.post('/ingredientinrecipe', Recipe_IngredientController.ingrediente_da_receita);

module.exports = router;