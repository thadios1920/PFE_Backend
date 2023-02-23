const express = require ('express')
const router = express.Router()
const chantierController = require('../Controllers/chantierController')


router.get('/',chantierController.findAll)
router.get('/:id',chantierController.findById)
router.get('/:id/etages',chantierController.findEtages)
router.get('/:id/etages/:etageId',chantierController.getEtageById)
router.post('/',chantierController.addChantier)
router.put('/:id',chantierController.updateChantier)
router.put('/:id/etages/:etageId',chantierController.affecterEtage) 

module.exports = router