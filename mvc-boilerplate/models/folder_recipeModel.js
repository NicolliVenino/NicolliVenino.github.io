const db = require('../config/db');

const Folder_RecipeModel = {

    async adicionarReceita ({folder_id, recipe_id}) {
        const result = await db.query('INSERT INTO folders_recipes (folder_id, recipe_id) VALUES ($1, $2) RETURNING *', [folder_id, recipe_id]);
        return result.rows[0];
    }
};
module.exports = Folder_RecipeModel;