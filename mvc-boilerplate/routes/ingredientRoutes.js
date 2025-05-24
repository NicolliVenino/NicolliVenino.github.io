const express = require('express');
const router = express.Router();
const IngredientController = require('../controllers/ingredientController');

// Endpoint para listar todos os ingredientes
router.get('/ingredients', IngredientController.listarIngredientes);

// Endpoint para obter um ingrediente a partir do id
router.get('/ingredients/:id', IngredientController.obterIngrediente);

// Endpoint para criar um ingrediente
router.post('/ingredients', IngredientController.criarIngrediente);

// Endpoint para deletar um ingrediente
router.delete('/ingredients/:id', IngredientController.deletarIngrediente);

module.exports = router;