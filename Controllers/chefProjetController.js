const express = require ('express')
const chefProjet = require('../Models/chefProjet.js')


exports.afficher = function (req, res) {


  res.send(chefProjet.findAll())
}