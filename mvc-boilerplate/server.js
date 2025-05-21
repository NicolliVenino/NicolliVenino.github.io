const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const recipeRoutes = require('./routes/recipeRoutes');

// Configura o bodyParser para ser possível testar os endpoints em servidores externos.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas da API com prefixo /api
app.use('/api', recipeRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});