const express = require('express');
const router = express.Router();
const FolderController = require('../controllers/folderController');

// Endpoint para listar todos os usuários
router.get('/folders', FolderController.listarPastas);

// Endpoint para obter um usuário específico pelo ID
router.get('/folders/:id', FolderController.obterPasta);

// Endpoint para criar um novo usuário
router.post('/folders', FolderController.criarPasta);

// Endpoint para criar um novo usuário
router.delete('/folders/:id', FolderController.deletarPasta);

module.exports = router;