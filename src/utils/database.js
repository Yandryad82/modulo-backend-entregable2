const {Sequelize} = require('sequelize');

const db = new Sequelize({
  database: "todo_db",
  port: 5432,
  host: "localhost",
  username: "yandry",
  password: "123.Abc*",
  dialect: "postgres"
});

module.exports = db;