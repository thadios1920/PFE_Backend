const Sequelize = require('sequelize')

const Db = require("../db/dbConnect.js")


const {DataTypes} = Sequelize

const Etage = require("./etage.js");
const Tache = require("./tache.js");

const Chantier = Db.define("Chantier", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date_debut: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  date_fin: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

Chantier.hasMany(Etage, {
  onDelete: "CASCADE",
});
Chantier.hasMany(Tache, { onDelete: 'CASCADE' });


module.exports = Chantier;
