const express = require ('express')
const router = express.Router()
const chefProjetController = require('../Controllers/chefProjetController')

router.get('/',chefProjetController.findAll) // Retourne liste de tous les Chef Projet
router.get('/:id',chefProjetController.findChefById)
router.get('/:id/projets',chefProjetController.findProjects) //Retourne liste des projets d'un chefProjet 
router.get('/:id/projets/:projetId',chefProjetController.getProjetctById)
router.put('/:id',chefProjetController.updateChefProjet)
router.put('/:id/projets/:projetId',chefProjetController.affecterProjet)

module.exports = router