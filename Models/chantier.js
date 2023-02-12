const Sequelize = require('sequelize')
const Db = require("../db/dbConnect.js")
const {DataTypes} = Sequelize

const Projet = require('./projet.js');

class Chantier extends Sequelize.Model {}
Chantier.init({
    nom: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    date_debut: { type: DataTypes.DATE },
    date_fin: { type: DataTypes.DATE },
  },
  {
    modelName: 'Chantier',
    tableName: 'Chantier',
    sequelize: Db,
}
  );


  // Chantier.belongsTo(Projet, { onDelete: 'SET_NULL', onUpdate: 'CASCADE' });

  Chantier.associate = (models) => {
    Chantier.belongsTo(models.Projet, {
     onDelete: 'SET NULL', onUpdate: 'CASCADE' 
    });
}
  
module.exports = Chantier;