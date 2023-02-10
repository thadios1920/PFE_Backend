const { Sequelize } = require('sequelize')

module.exports = new Sequelize('userTest','root','password',{dialect:'mysql',host:'localhost'})