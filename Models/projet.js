const Sequelize = require('sequelize')
const Chantier = require('../Models/chantier')

const Db = require("../db/dbConnect.js")
const {DataTypes} = Sequelize


const Projet = Db.define('Projet', {
    nom: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    start_date: { type: DataTypes.DATE },
    end_date: { type: DataTypes.DATE },
  });
  
  // Assosier Projet avev Chantier
  Projet.hasMany(Chantier, { onDelete: 'SET NULL' });
  
module.exports = Projet;