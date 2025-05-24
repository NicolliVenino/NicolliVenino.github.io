const db = require('../config/db');

const UserModel = {

    // Função para listar usuários
    async getAllUsuarios() {
        const result = await db.query('SELECT * FROM users');
        return result.rows;
    },

    // Função para obter um usuário a partir do id
    async getUsuarioById(id) {
        const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    },

    // Função para criar um usuário
    async createUsuario ({first_name, last_name, avatar, username, email, password, description}) {
        const result = await db.query('INSERT INTO users (first_name, last_name, avatar, username, email, password, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [first_name, last_name, avatar, username, email, password, description]);
        return result.rows[0];
    },

    // Função para deletar um usuário
    async deletarUsuario (id) {
    const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
    }

};
module.exports = UserModel;