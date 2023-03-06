const express = require ('express')
const router = express.Router()
const chefChantierController = require('../Controllers/chefChantierController')

router.get('/',chefChantierController.findAll)
router.get('/:id',chefChantierController.findById)
router.get('/:id/taches',chefChantierController.findAllTasks)
router.post('/',chefChantierController.addChefChantier)
router.put('/:id',chefChantierController.updateChefChantier)
 


module.exports = router 