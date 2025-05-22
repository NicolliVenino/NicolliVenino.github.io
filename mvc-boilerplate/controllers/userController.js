const UserModel = require('../models/userModel');

const UserController = {
  async listarUsuarios(req, res) {
    try {
      const usuarios = await UserModel.getAllUsuarios();
      return res.status(200).json(usuarios);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar usuários' });
    }
  },

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

  async criarUsuario(req, res) {
    try {
      const novoUsuario = await UserModel.createUsuario(req.body);
      return res.status(201).json(novoUsuario);
      } catch (err) {
        console.error('Erro ao criar usuário:', err); // << isso vai te mostrar o erro real
        res.status(500).json({ error: 'Erro ao criar usuário' });
      }
  }
};

module.exports = UserController;