// Usuário válido (estático)
const validUser = {
  username: 'admin',
  password: '12345'
};

// Exibe a página de login
exports.showLoginPage = (req, res) => {
  res.render('login', { error: null });
};

// Processa os dados do formulário de login
exports.loginProcess = (req, res) => {
  const { username, password } = req.body;

  // Verifica se os campos foram preenchidos
  if (!username || !password) {
    return res.render('login', { error: 'Preencha todos os campos.' });
  }

  // Verifica as credenciais
  if (username === validUser.username && password === validUser.password) {
    // Em caso de sucesso, renderiza o dashboard
    res.redirect('/dashboard');
  } else {
    // Em caso de falha, retorna a página de login com mensagem de erro
    return res.render('login', { error: 'Usuário ou senha inválidos.' });
  }
};