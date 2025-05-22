const Folder_RecipeModel = require('../models/folder_recipeModel');

const Folder_RecipeController = {

  async adicionarReceita(req, res) {
    try {
      const novaPasta_Receita = await Folder_RecipeModel.adicionarReceita(req.body);
      return res.status(201).json(novaPasta_Receita);
      } catch (err) {
        console.error('Erro ao adicionar receita na pasta:', err); // << isso vai te mostrar o erro real
        res.status(500).json({ error: 'Erro ao adicionar receita na pasta.' });
      }
  }
};

module.exports = Folder_RecipeController;