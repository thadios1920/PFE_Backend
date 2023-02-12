const express = require ('express')
const router = express.Router()
const chefProjetController = require('../Controllers/chefProjetController')

router.get('/',chefProjetController.findAll) // Retourne liste de tous les Chef Projet
router.get('/:id/projets',chefProjetController.findProjects) 
router.put('/:id/projets/:projetId',chefProjetController.affecterProjet)

module.exports = router