const { Sequelize } = require('sequelize')

module.exports = new Sequelize('PFE_DB','root','',{dialect:'mysql',host:'localhost'})