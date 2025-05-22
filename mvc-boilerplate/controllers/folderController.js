const FolderModel = require('../models/folderModel');

const FolderController = {
  async listarPastas(req, res) {
    try {
      const folders = await FolderModel.getAllPastas();
      return res.status(200).json(folders);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar pastas' });
    }
  },

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

  async criarPasta(req, res) {
    try {
      const novaPasta = await FolderModel.createPasta(req.body);
      return res.status(201).json(novaPasta);
      } catch (err) {
        console.error('Erro ao criar pasta:', err); // << isso vai te mostrar o erro real
        res.status(500).json({ error: 'Erro ao criar pasta' });
      }
  }
};

module.exports = FolderController;