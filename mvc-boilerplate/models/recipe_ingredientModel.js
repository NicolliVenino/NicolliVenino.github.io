const db = require('../config/db');

const Recipe_IngredientModel = {

    async ingrediente_da_receita ({recipe_id, ingredient_id}) {
        const result = await db.query('INSERT INTO recipes_ingredients (recipe_id, ingredient_id) VALUES ($1, $2) RETURNING *', [recipe_id, ingredient_id]);
        return result.rows[0];
    }
};
module.exports = Recipe_IngredientModel;