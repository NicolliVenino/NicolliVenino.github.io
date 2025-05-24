const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Endpoint para listar todos os usuários
router.get('/users', UserController.listarUsuarios);

// Endpoint para obter um usuário a partir do id
router.get('/users/:id', UserController.obterUsuario);

// Endpoint para criar um usuário
router.post('/users', UserController.criarUsuario);

// Endpoint para deletar um usuário
router.delete('/users/:id', UserController.deletarUsuario);

module.exports = router;