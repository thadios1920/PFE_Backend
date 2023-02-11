const ChefProjet = require('../Models/chefProjet')

exports.afficher = function (req, res) {
  

  res.send(ChefProjet.getAttributes())
  console.log("i am testing");
}