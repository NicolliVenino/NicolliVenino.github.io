const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");

const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const userRoutes = require('./routes/userRoutes');
const folderRoutes = require('./routes/folderRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');
const folder_recipeRoutes = require('./routes/folder_recipeRoutes');
const recipe_ingredientRoutes = require('./routes/recipe_ingredientRoutes');

// Configurando o EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Definindo a pasta de arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para processar dados enviados via formulário
app.use(express.urlencoded({ extended: true }));

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
app.use('/', authRoutes);

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});