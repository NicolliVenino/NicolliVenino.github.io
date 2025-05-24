const db = require('../config/db');

const Recipe_IngredientModel = {

    // Função para colocar um ingrediente em uma receita
    async ingrediente_da_receita ({recipe_id, ingredient_id}) {
        const result = await db.query('INSERT INTO recipes_ingredients (recipe_id, ingredient_id) VALUES ($1, $2) RETURNING *', [recipe_id, ingredient_id]);
        return result.rows[0];
    },

    // Função para listar os ingredientes de uma receita
    async listar_ingrediente_da_receita() {
        const result = await db.query('SELECT * FROM recipes_ingredients');
        return result.rows;
    },

    // Função para obter o ingrediente de uma receita a partir do id
    async obter_ingrediente_da_receita(id) {
        const result = await db.query('SELECT * FROM recipes_ingredients WHERE id = $1', [id]);
        return result.rows[0];
    },

    // Função para deletar o ingrediente de uma receita
    async deletar_ingrediente_da_receita (id) {
    const result = await db.query('DELETE FROM recipes_ingredients WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
    }
};

module.exports = Recipe_IngredientModel;