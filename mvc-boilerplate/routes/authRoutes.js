// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota para exibir a página de login
router.get('/login', authController.showLoginPage);

// Rota para processar os dados do formulário de login
router.post('/login', authController.loginProcess);

module.exports = router;
