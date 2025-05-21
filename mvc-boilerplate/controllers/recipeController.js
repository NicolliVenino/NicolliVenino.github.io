const RecipeModel = require('../models/recipeModel');

const RecipeController = {
  async listarReceitas(req, res) {
    try {
      const receitas = await RecipeModel.getAllReceitas();
      return res.status(200).json(receitas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar receitas' });
    }
  },

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

  async criarReceita(req, res) {
    try {
      const novaReceita = await RecipeModel.createReceita(req.body);
      return res.status(201).json(novaReceita);
      } catch (err) {
        console.error('Erro ao criar receita:', err); // << isso vai te mostrar o erro real
        res.status(500).json({ error: 'Erro ao criar receita' });
      }
  }
};

module.exports = RecipeController;
