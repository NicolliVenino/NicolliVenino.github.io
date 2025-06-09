const db = require('../config/db');
const RecipeModel = require('../models/recipeModel');
const FolderModel = require('../models/folderModel');

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
      const folders = await FolderModel.getAllPastas();
      if (!receita) {
        return res.status(404).json({ error: 'Receita não encontrada' });
      }
      res.render('receita', { receita, folders });
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
        console.error('Erro ao criar receita:', err); 
        res.status(500).json({ error: 'Erro ao criar receita' });
      }
  },

    async updateReceita(req, res) {
      try {
        const { name, image, type, category, directions, prep_time, cook_time, servings, amount, score, author } = req.body;
        console.log("REQ.BODY:", req.body);          
        console.log("NAME:", name);                   
        console.log("IMAGE:", image);
        console.log("TYPE:", type);      
        console.log("CATEGORY:", category);      
        console.log("DIRECTIONS:", directions);      
        console.log("PREP_TIME:", prep_time);      
        console.log("COOK_TIME:", cook_time);  
        console.log("SERVINGS:", servings); 
        console.log("AMOUNT:", amount); 
        console.log("SCORE:", score); 
        console.log("AUTHOR:", author);         
        const updatedReceita = await RecipeModel.updateReceita(req.params.id, name, image, type, category, directions, prep_time, cook_time, servings, amount, score, author);
        if (updatedReceita) {
        res.status(200).json(updatedReceita);
        } else {
        res.status(404).json({ error: 'Receita não encontrada' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
   },

  // Define um método assíncrono para deletar uma receita, de modo a lidar com uma requisão DELETE.
    async deletarReceita(req, res) {
      try {
        const id = parseInt(req.params.id);
        const receitaExcluir = await RecipeModel.deletarReceita(id);
        return res.status(200).json({ message: 'Receita deletada com sucesso' });
      } catch (err) {
        console.error('Erro ao deletar receita:', err);
        res.status(500).json({ error: 'Erro ao deletar receita' });
      }
    },
    
    async renderizarDetalheReceita(req, res) {
  try {
    const { id } = req.params;

    const receitaResult = await db.query('SELECT * FROM recipes WHERE id = $1', [id]);
    const receita = receitaResult.rows[0];

    if (!receita) {
      return res.status(404).send('Receita não encontrada');
    }

    const pastasResult = await db.query('SELECT id, name FROM folders');
    const pastas = pastasResult.rows;

    const outrasReceitasResult = await db.query(`
      SELECT id, name, image FROM recipes
      WHERE id <> $1
      LIMIT 6
    `, [id]);

    const outrasReceitas = outrasReceitasResult.rows;

    const esquerda = outrasReceitas.slice(0, 3); 
    const direita = outrasReceitas.slice(3);     

    res.render('detalheReceita', {
      receita,
      pastas,
      esquerda,
      direita
    });

  } catch (error) {
    console.error('Erro ao renderizar detalhe da receita:', error);
    res.status(500).send('Erro ao carregar receita');
  }
},

    async renderizarDashboard(req, res) {
      try {
        const receitas = await RecipeModel.getAllReceitas(); 
        return res.render('dashboard', { receitas }); 
      } catch (error) {
        console.error('Erro ao carregar o dashboard:', error);
        return res.status(500).send('Erro ao carregar o dashboard');
      }
    }
};

module.exports = RecipeController;
