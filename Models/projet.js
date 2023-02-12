const Sequelize = require('sequelize')
const Db = require("../db/dbConnect.js")
const {DataTypes} = Sequelize

const Chantier = require('../Models/chantier');
const ChefProjet = require('../Models/chefProjet');

class Projet extends Sequelize.Model {}

Projet.init({
    nom: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    start_date: { type: DataTypes.DATE },
    end_date: { type: DataTypes.DATE },
  },
  {
    modelName: 'Projet',
    tableName: 'Projet',
    sequelize: Db,
}
  );
  
  // Assosier Projet avec Chantier

  // Projet.belongsTo(ChefProjet, { onDelete: 'RESTRICT' });

  Projet.associate = (models) => {
    Projet.belongsTo(models.ChefProjet, {
      onDelete: 'RESTRICT'
    });
}


  Projet.hasMany(Chantier, { onDelete: 'SET NULL' });
  
module.exports = Projet;