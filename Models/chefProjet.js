const sequelize = require('sequelize')
const Utlisateur = require('./utilisateur.js')
const Db = require("../db/dbConnect.js")
const {DataTypes} = sequelize


const Projet = require('../Models/projet');


class ChefProjet extends sequelize.Model {}
ChefProjet.init (
    {
        projet : {
            type : DataTypes.STRING,
            // allowNull :false
        }
    },
    {
             modelName: 'chefProjet',
             tableName: 'chefProjet',
             sequelize: Db,
    }
)


ChefProjet.hasMany(Projet, { onDelete: 'RESTRICT' });


module.exports = ChefProjet