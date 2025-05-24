const db = require('../config/db');

const RecipeModel = {

    // Função para listar receitas
    async getAllReceitas() {
        const result = await db.query('SELECT * FROM recipes');
        return result.rows;
    },

    // Função para obter uma receita a partir do id
    async getReceitaById(id) {
        const result = await db.query('SELECT * FROM recipes WHERE id = $1', [id]);
        return result.rows[0];
    },

    // Função para criar uma receita
    async createReceita ({name, image, type, category, directions, prep_time, cook_time, servings, amount, score, author}) {
        const result = await db.query('INSERT INTO recipes (name, image, type, category, directions, prep_time, cook_time, servings, amount, score, author) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *', [name, image, type, category, directions, prep_time, cook_time, servings, amount, score, author]);
        return result.rows[0];
    },

    // Função para deletar uma receita
    async deletarReceita (id) {
    const result = await db.query('DELETE FROM recipes WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
    } 
};
module.exports = RecipeModel;