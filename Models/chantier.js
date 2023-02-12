const Sequelize = require('sequelize')

const Db = require("../db/dbConnect.js")


const {DataTypes} = Sequelize

const Chantier = Db.define('Chantier', {
    nom: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    date_debut: { type: DataTypes.DATE },
    date_fin: { type: DataTypes.DATE },
  });
  
module.exports = Chantier;