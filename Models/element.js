const Sequelize = require('sequelize')

const Db = require("../db/dbConnect.js")


const {DataTypes} = Sequelize

const Zone = require("../Models/zone")

class Element extends Sequelize.Model {}

Element.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  hauteur: {
    type: DataTypes.DECIMAL,
    // allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  nom: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  matiere: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  largeur: {
    type: DataTypes.DECIMAL,
    // allowNull: true,
  },
},{
  modelName: "Element",
  tableName: "Element",
  sequelize: Db,
});

Element.hasOne(Zone);


module.exports = Element;
