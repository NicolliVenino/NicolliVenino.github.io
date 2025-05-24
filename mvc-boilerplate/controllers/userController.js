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
  }

};

module.exports = UserController;