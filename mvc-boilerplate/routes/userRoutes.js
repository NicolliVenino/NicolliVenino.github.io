const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Endpoint para listar todos os usuários
router.get('/users', UserController.listarUsuarios);

// Endpoint para obter um usuário específico pelo ID
router.get('/users/:id', UserController.obterUsuario);

// Endpoint para criar um novo usuário
router.post('/users', UserController.criarUsuario);

router.delete('/users/:id', UserController.deletarUsuario);

module.exports = router;