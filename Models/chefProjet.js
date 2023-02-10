const sequelize = require('sequelize')
const Utlisateur = require('./utilisateur')

const Db = require("../db/dbConnect.js")


const {DataTypes} = sequelize
class ChefProjet extends Utlisateur {}
ChefProjet.init({
    
},{
    modelName: 'chefProjet',
    tableName: 'chefProjet',
    sequelize,
})

module.exports = ChefProjet