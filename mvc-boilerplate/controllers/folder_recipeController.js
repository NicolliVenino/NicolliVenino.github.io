const Folder_RecipeModel = require('../models/folder_recipeModel');

const Folder_RecipeController = {

  // Define um método assíncrono para adicionar uma receita, de modo a lidar com uma requisão POST.
  async adicionarReceita(req, res) {
    try {
      const novaPasta_Receita = await Folder_RecipeModel.adicionarReceita(req.body); // Chama uma função do Model.
      return res.status(201).json(novaPasta_Receita);
      } catch (err) {
        console.error('Erro ao adicionar receita na pasta:', err); 
        res.status(500).json({ error: 'Erro ao adicionar receita na pasta.' });
      }
  },

    // Define um método assíncrono para listar receitas, de modo a lidar com uma requisão GET.
    async listarPastasReceitas(req, res) {
    try {
      const pastas_receitas = await Folder_RecipeModel.getAllPastasReceitas(); // Chama uma função do Model.
      return res.status(200).json(pastas_receitas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar pastas_receitas' });
    }
  },

  // Define um método assíncrono para obter uma receita a partir do id, de modo a lidar com uma requisão GET.
  async obterPastaReceita(req, res) {
    try {
      const { id } = req.params;
      const pasta_receita = await Folder_RecipeModel.getPastaReceitaById(id); // Chama uma função do Model.
      if (!pasta_receita) {
        return res.status(404).json({ error: 'Pasta_receita não encontrada' });
      }
      return res.status(200).json(pasta_receita);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao obter pasta_receita' });
    }
  },

  // Define um método assíncrono para deletar uma receita a partir do id, de modo a lidar com uma requisão DELETE.
  async deletarPastaReceita(req, res) {
    try {
      const id = parseInt(req.params.id); 
      const pastaReceitaExcluir = await Folder_RecipeModel.deletarPastaReceita(id); // Chama uma função do Model.
      return res.status(200).json({ message: 'Pasta_receita deletada com sucesso' });
    } catch (err) {
      console.error('Erro ao deletar pasta_receita:', err);
      res.status(500).json({ error: 'Erro ao deletar pasta_receita' });
    }
  }

};

module.exports = Folder_RecipeController;