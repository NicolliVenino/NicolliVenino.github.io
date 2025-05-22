const express = require('express');
const router = express.Router();
const Recipe_IngredientController = require('../controllers/recipe_ingredientController');

router.get('/ingredientinrecipe', Recipe_IngredientController.listar_ingrediente_da_receita);

router.get('/ingredientinrecipe/:id', Recipe_IngredientController.obter_ingrediente_da_receita);

router.post('/ingredientinrecipe', Recipe_IngredientController.ingrediente_da_receita);

router.delete('/ingredientinrecipe/:id', Recipe_IngredientController.deletar_ingrediente_da_receita);

module.exports = router;