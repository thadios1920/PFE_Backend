const sequelize = require('sequelize')
const Utlisateur = require('./utilisateur.js')

const Db = require("../db/dbConnect.js")


const {DataTypes} = sequelize

class ChefProjet extends Utlisateur {}
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




module.exports = ChefProjet