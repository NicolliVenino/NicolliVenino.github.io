const express = require('express');
const router = express.Router();
const FolderController = require('../controllers/folderController');

// Endpoint para listar todos as pastas
router.get('/folders', FolderController.listarPastas);

// Endpoint para obter uma pasta a partir do id
router.get('/folders/:id', FolderController.obterPasta);

// Endpoint para criar uma pasta
router.post('/folders', FolderController.criarPasta);

router.post('/folders/salvar-receita', FolderController.salvarReceitaNaPasta);

// Endpoint para deletar uma pasta
router.delete('/folders/:id', FolderController.deletarPasta);

module.exports = router;