const express = require ('express')
const router = express.Router()
const projetController = require('../Controllers/projetController')

router.get('/',projetController.findAll)
router.get('/:id',projetController.findById)
router.get('/:id/chantiers',projetController.findChantiers)
router.get('/:id/chantiers/:chantierId',projetController.getChntierById)
router.post('/',projetController.addProject)
router.put('/:id',projetController.updateProject)
router.put('/:id/chantiers/:chantierId',projetController.affecterChantier) 


module.exports = router