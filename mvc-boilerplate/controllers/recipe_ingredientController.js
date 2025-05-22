const Recipe_IngredientModel = require('../models/recipe_ingredientModel');

const Recipe_IngredientController = {

  async ingrediente_da_receita (req, res) {
    try {
      const novoReceitaIngrediente = await Recipe_IngredientModel.ingrediente_da_receita(req.body);
      return res.status(201).json(novoReceitaIngrediente);
      } catch (err) {
        console.error('Erro ao adicionar ingrediente na receita:', err); // << isso vai te mostrar o erro real
        res.status(500).json({ error: 'Erro ao adicionar ingrediente na receita.' });
      }
  }
};

module.exports = Recipe_IngredientController;