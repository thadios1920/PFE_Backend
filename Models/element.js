const Sequelize = require('sequelize')

const Db = require("../db/dbConnect.js")


const {DataTypes} = Sequelize


const Element = Db.define("Element", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  hauteur: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  largeur: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
});

module.exports = Element;
