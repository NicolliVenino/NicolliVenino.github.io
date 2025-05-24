const RecipeModel = require('../models/recipeModel');

const RecipeController = {

  // Define um método assíncrono para listar receitas, de modo a lidar com uma requisão GET.
  async listarReceitas(req, res) {
    try {
      const receitas = await RecipeModel.getAllReceitas();
      return res.status(200).json(receitas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar receitas' });
    }
  },

  // Define um método assíncrono para obter uma receita a partir do id, de modo a lidar com uma requisão GET.
  async obterReceita(req, res) {
    try {
      const { id } = req.params;
      const receita = await RecipeModel.getReceitaById(id);
      if (!receita) {
        return res.status(404).json({ error: 'Receita não encontrada' });
      }
      return res.status(200).json(receita);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao obter receita' });
    }
  },

  // Define um método assíncrono para criar uma receita, de modo a lidar com uma requisão POST.
  async criarReceita(req, res) {
    try {
      const novaReceita = await RecipeModel.createReceita(req.body);
      return res.status(201).json(novaReceita);
      } catch (err) {
        console.error('Erro ao criar receita:', err); // << isso vai te mostrar o erro real
        res.status(500).json({ error: 'Erro ao criar receita' });
      }
  },

  // Define um método assíncrono para deletar uma receita, de modo a lidar com uma requisão DELETE.
    async deletarReceita(req, res) {
      try {
        const id = parseInt(req.params.id); // extrai o ID da URL
        const receitaExcluir = await RecipeModel.deletarReceita(id);
        return res.status(200).json({ message: 'Receita deletada com sucesso' });
      } catch (err) {
        console.error('Erro ao deletar receita:', err);
        res.status(500).json({ error: 'Erro ao deletar receita' });
      }
    }
};

module.exports = RecipeController;
