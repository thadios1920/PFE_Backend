const Sequelize = require("sequelize");
const Db = require("../db/dbConnect.js");
const { DataTypes } = Sequelize;

const Chantier = require("../Models/chantier");
const ChefProjet = require("../Models/chefProjet");

class Projet extends Sequelize.Model {}

Projet.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    budget: { type: DataTypes.DECIMAL },
    start_date: { type: DataTypes.DATE },
    end_date: { type: DataTypes.DATE },
    lieu: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "Projet",
    tableName: "Projet",
    sequelize: Db,
  }
);

// Assosier Projet avec Chantier

// Projet.belongsTo(ChefProjet, { onDelete: 'RESTRICT' });

Projet.associate = (models) => {
  Projet.belongsTo(models.ChefProjet, {
    onDelete: "RESTRICT",
  });
};

Projet.hasMany(Chantier, { onDelete: "SET NULL" });

module.exports = Projet;
