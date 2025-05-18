const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Middleware para processar JSON
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotas
const routes = require('./routes/frontRoutes');
app.use('/', routes);

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});