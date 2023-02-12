const Projet = require('../Models/projet')
const Chantier = require('../Models/chantier')


exports.afficher = function (req,res) {

  Projet.findAll()
  .then(projets=> {
      res.send(projets)
      console.log(projets[0].nom)
  } )
  .catch(err => {console.log(err)})
  
}

exports.addProject = async function (req,res) {
  const {body} = req
    try {
      await Projet.create({...body})
      res.status(201).send("Project created")
      console.log("Project created");
    } catch (error) {
      console.log(error);
    }
       
        
}