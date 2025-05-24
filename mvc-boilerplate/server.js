const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const recipeRoutes = require('./routes/recipeRoutes');
const userRoutes = require('./routes/userRoutes');
const folderRoutes = require('./routes/folderRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');
const folder_recipeRoutes = require('./routes/folder_recipeRoutes');
const recipe_ingredientRoutes = require('./routes/recipe_ingredientRoutes');

// Configura o bodyParser para ser possível testar os endpoints em servidores externos.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas da API com prefixo /api
app.use('/api', recipeRoutes);
app.use('/api', userRoutes);
app.use('/api', folderRoutes);
app.use('/api', ingredientRoutes);
app.use('/api', folder_recipeRoutes);
app.use('/api', recipe_ingredientRoutes);

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});