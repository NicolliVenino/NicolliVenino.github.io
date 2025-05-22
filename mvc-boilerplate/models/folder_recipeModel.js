const db = require('../config/db');

const Folder_RecipeModel = {

    async adicionarReceita ({folder_id, recipe_id}) {
        const result = await db.query('INSERT INTO folders_recipes (folder_id, recipe_id) VALUES ($1, $2) RETURNING *', [folder_id, recipe_id]);
        return result.rows[0];
    },

    async getAllPastasReceitas() {
        const result = await db.query('SELECT * FROM folders_recipes');
        return result.rows;
    },

    async getPastaReceitaById(id) {
        const result = await db.query('SELECT * FROM folders_recipes WHERE id = $1', [id]);
        return result.rows[0];
    },

    async deletarPastaReceita (id) {
        const result = await db.query('DELETE FROM folders_recipes WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }
};
module.exports = Folder_RecipeModel;