const db = require('../config/db');

const Folder_RecipeModel = {

    // Função para adicionar uma receita em uma pasta
    async adicionarReceita ({folder_id, recipe_id}) {
        const result = await db.query('INSERT INTO folders_recipes (folder_id, recipe_id) VALUES ($1, $2) RETURNING *', [folder_id, recipe_id]);
        return result.rows[0];
    },

    // // Função para listar receitas em pastas
    async getAllPastasReceitas() {
        const result = await db.query('SELECT * FROM folders_recipes');
        return result.rows;
    },

    // Função para pegar uma relação entre receita e pasta a partir do id
    async getPastaReceitaById(id) {
        const result = await db.query('SELECT * FROM folders_recipes WHERE id = $1', [id]);
        return result.rows[0];
    },

    // Função para deletar uma receita de uma pasta
    async deletarPastaReceita (id) {
        const result = await db.query('DELETE FROM folders_recipes WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }
};
module.exports = Folder_RecipeModel;