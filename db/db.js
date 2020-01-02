require('dotenv').config();
const {Sequelize, DataTypes }  = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

const todo = require('../models/todo')(sequelize, DataTypes);

const db = {   
    Sequelize,
    sequelize,
    todo
};

db.sequelize.sync();

module.exports = db;