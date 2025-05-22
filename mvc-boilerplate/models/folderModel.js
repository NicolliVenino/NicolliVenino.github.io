const db = require('../config/db');

const FolderModel = {
    async getAllPastas() {
        const result = await db.query('SELECT * FROM folders');
        return result.rows;
    },

    async getPastaById(id) {
        const result = await db.query('SELECT * FROM folders WHERE id = $1', [id]);
        return result.rows[0];
    },

    async createPasta ({name, description, user_id}) {
        const result = await db.query('INSERT INTO folders (name, description, user_id) VALUES ($1, $2, $3) RETURNING *', [name, description, user_id]);
        return result.rows[0];
    },

    async deletarPasta (id) {
        const result = await db.query('DELETE FROM folders WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }
};
module.exports = FolderModel;