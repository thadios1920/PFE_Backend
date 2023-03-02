const express = require ('express')
const router = express.Router()
const tacheController = require('../Controllers/tacheController')

router.get('/',tacheController.findAll)
router.get('/:id',tacheController.findById)
router.post('/',tacheController.addTache)
router.put('/:id',tacheController.updateTache)
 


module.exports = router 