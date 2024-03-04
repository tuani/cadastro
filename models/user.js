const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('usuário', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    novasenha: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

User.sync();
// User.sync ({ alter: true });
module.exports = User;