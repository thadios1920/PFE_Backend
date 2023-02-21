const express = require ('express')
const router = express.Router()
const chefProjetController = require('../Controllers/chefProjetController')

router.get('/',chefProjetController.findAll) // Retourne liste de tous les Chef Projet
router.get('/:id',chefProjetController.findChefById) // Retourne un ChefProjet par ID
router.get('/:id/projets',chefProjetController.findProjects) // Retourne liste des projets d'un chefProjet 
router.get('/:id/projets/:projetId',chefProjetController.getProjetctById) // Retourne un projet de chefProjet par son ID 
router.put('/:id',chefProjetController.updateChefProjet) // Modifier un ChefProjet 
router.put('/:id/projets/:projetId',chefProjetController.affecterProjet) // Affecter un projet a un ChefProjet

module.exports = router