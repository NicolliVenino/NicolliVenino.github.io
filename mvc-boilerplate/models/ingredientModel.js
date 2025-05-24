const db = require('../config/db');

const IngredientModel = {

    // Função para listar ingredientes
    async getAllIngredientes() {
        const result = await db.query('SELECT * FROM ingredients');
        return result.rows;
    },

    // Função para obter um ingrediente a partir do id
    async getIngredienteById(id) {
        const result = await db.query('SELECT * FROM ingredients WHERE id = $1', [id]);
        return result.rows[0];
    },

    // Função para criar um ingrediente
    async createIngrediente ({name, specification}) {
        const result = await db.query('INSERT INTO ingredients (name, specification) VALUES ($1, $2) RETURNING *', [name, specification]);
        return result.rows[0];
    },

    // Função para deletar um ingrediente
    async deletarIngrediente (id) {
    const result = await db.query('DELETE FROM ingredients WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
    }
};
module.exports = IngredientModel;