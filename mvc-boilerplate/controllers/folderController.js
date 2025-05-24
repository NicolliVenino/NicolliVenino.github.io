const FolderModel = require('../models/folderModel');

const FolderController = {

  // Define um método assíncrono para listar pastas, de modo a lidar com uma requisão GET.
  async listarPastas(req, res) {
    try {
      const folders = await FolderModel.getAllPastas();
      return res.status(200).json(folders);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar pastas' });
    }
  },

  // Define um método assíncrono para obter uma pasta a partir do id, de modo a lidar com uma requisão GET.
  async obterPasta(req, res) {
    try {
      const { id } = req.params;
      const pasta = await FolderModel.getPastaById(id);
      if (!pasta) {
        return res.status(404).json({ error: 'Pasta não encontrada' });
      }
      return res.status(200).json(pasta);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao obter pasta' });
    }
  },

  // Define um método assíncrono para criar uma pasta, de modo a lidar com uma requisão POST.
  async criarPasta(req, res) {
    try {
      const novaPasta = await FolderModel.createPasta(req.body);
      return res.status(201).json(novaPasta);
      } catch (err) {
        console.error('Erro ao criar pasta:', err); 
        res.status(500).json({ error: 'Erro ao criar pasta' });
      }
  },

  // Define um método assíncrono para deletar uma pasta a partir do id, de modo a lidar com uma requisão DELETE.
  async deletarPasta(req, res) {
    try {
      const id = parseInt(req.params.id); // extrai o ID da URL
      const pastaExcluir = await FolderModel.deletarPasta(id);
      return res.status(200).json({ message: 'Pasta deletada com sucesso' });
    } catch (err) {
      console.error('Erro ao deletar pasta:', err);
      res.status(500).json({ error: 'Erro ao deletar pasta' });
    }
  }
};

module.exports = FolderController;