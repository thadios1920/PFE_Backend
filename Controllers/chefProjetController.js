const ChefProjet = require('../Models/chefProjet')
const Projet = require ('../Models/projet')

// Methode qui renvoie la liste de tous les Chefs de Projets
exports.findAll = async function (req, res) {
  try {
    const chefProjetList = await ChefProjet.findAll()

    if (!chefProjetList) {
      return res.status(404).send({ message: 'Liste des chefs Projets Vide !!' });
    }

    return res.send(chefProjetList)
  } catch (error) {
    console.log(error);
  }
}

// Methode qui renvoie la liste des projets pour un chef donné
exports.findProjects = async function (req,res) {
  try {
    const chefprojet = await ChefProjet.findByPk(req.params.id, {
      include: { model: Projet }
    });

    if (!chefprojet) {
      return res.status(404).send({ message: 'Chef de projet non trouvé' });
    }  

    res.send(chefprojet.Projets);

  } catch (error) {
    console.log(error);
  }
}

// Methode qui affecte un projet existant donné a un chefProjet existant donné
exports.affecterProjet = async function (req,res) {
  
  try {
    // Recuperation du ChefProjet a travers son ID
    const chefprojet = await ChefProjet.findByPk(req.params.id);

    if (!chefprojet) {
      return res.status(404).send({ message: 'Chef de projet non trouvé' });
    }
    // Recuperation du Projet a travers son ID
    const projet = await Projet.findByPk(req.params.projetId);
  
    if (!projet) {
      return res.status(404).send({ message: 'Projet non trouvé' });
    }
  
    // Affectation de ID du chefProjet au champ ChefProjetId du class Projet
    await projet.update({ chefProjetId: chefprojet.id });
  
    res.send({ message: 'Projet affecté au chef de projet avec succès' ,projet: projet});

  } catch (error) {
    console.log(error);
  }


}