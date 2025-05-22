const express = require('express');
const router = express.Router();
const IngredientController = require('../controllers/ingredientController');

// Endpoint para listar todos os usuários
router.get('/ingredients', IngredientController.listarIngredientes);

// Endpoint para obter um usuário específico pelo ID
router.get('/ingredients/:id', IngredientController.obterIngrediente);

// Endpoint para criar um novo usuário
router.post('/ingredients', IngredientController.criarIngrediente);

router.delete('/ingredients/:id', IngredientController.deletarIngrediente);

module.exports = router;