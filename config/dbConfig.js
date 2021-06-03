const {Sequelize} = require('sequelize');

module.exports = new Sequelize('todo_app','root', '',{
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log
})