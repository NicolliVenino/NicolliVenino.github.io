const db = require('../config/db');

const UserModel = {
    async getAllUsuarios() {
        const result = await db.query('SELECT * FROM users');
        return result.rows;
    },

    async getUsuarioById(id) {
        const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    },

    async createUsuario ({first_name, last_name, avatar, username, email, password, description}) {
        const result = await db.query('INSERT INTO users (first_name, last_name, avatar, username, email, password, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [first_name, last_name, avatar, username, email, password, description]);
        return result.rows[0];
    }
};
module.exports = UserModel;