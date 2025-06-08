const db = require('../config/db');
const UserModel = require('../models/userModel');

const UserController = {

  // Define um método assíncrono para listar usuários, de modo a lidar com uma requisão GET.
  async listarUsuarios(req, res) {
    try {
      const usuarios = await UserModel.getAllUsuarios();
      return res.status(200).json(usuarios);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar usuários' });
    }
  },

  // Define um método assíncrono para obter um usuário a partir do id, de modo a lidar com uma requisão GET.
  async obterUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuario = await UserModel.getUsuarioById(id);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrada' });
      }
      return res.status(200).json(usuario);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao obter usuário' });
    }
  },

  // Define um método assíncrono para criar um usuário, de modo a lidar com uma requisão POST.
  async criarUsuario(req, res) {
    try {
      const novoUsuario = await UserModel.createUsuario(req.body);
      return res.status(201).json(novoUsuario);
      } catch (err) {
        console.error('Erro ao criar usuário:', err); 
        res.status(500).json({ error: 'Erro ao criar usuário' });
      }
  },

  // Define um método assíncrono para deletar um usuário a partir do id, de modo a lidar com uma requisão DELETE.
  async deletarUsuario(req, res) {
    try {
      const id = parseInt(req.params.id); 
      const usuarioExcluir = await UserModel.deletarUsuario(id);
      return res.status(200).json({ message: 'Usuario deletado com sucesso' });
    } catch (err) {
      console.error('Erro ao deletar usuário:', err);
      res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
  },

  async renderizarPerfil(req, res) {
  try {
    const usuarioId = 5; // ou outro valor temporário para teste

    const usuarioResult = await db.query('SELECT first_name, avatar FROM users WHERE id = $1', [usuarioId]);
    const pastasResult = await db.query('SELECT id, name, description FROM folders WHERE user_id = $1', [usuarioId]);

    if (usuarioResult.rows.length === 0) {
      return res.status(404).send('Usuário não encontrado');
    }

    const usuario = usuarioResult.rows[0];
    const pastas = pastasResult.rows;

    res.render('perfilUsuario', { usuario, pastas });
  } catch (error) {
    console.error('Erro ao carregar perfil:', error); // Esse console é importante agora
    res.status(500).send('Erro ao carregar perfil do usuário');
  }
}



};

module.exports = UserController;