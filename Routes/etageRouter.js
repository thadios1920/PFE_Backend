const express = require ('express')
const router = express.Router()
const etageController = require('../Controllers/etageController')


router.get('/',etageController.findAll)
router.get('/:id',etageController.findById)
router.get('/:id/etages',etageController.findElements)
router.get('/:id/elements/:elementId',etageController.getElementById)
router.get('/:id/plan',etageController.getPlan)
router.post('/',etageController.addEtage)
router.put('/:id',etageController.updateEtage)
router.put('/:id/elements/:elementId',etageController.affecterElement) 
router.put('/:id/plans/:planId',etageController.affecterPlan) 

module.exports = router