const express = require ('express')
const router = express.Router()
const projetController = require('../Controllers/projetController')

router.get('/',projetController.afficher)
router.post('/',projetController.addProject)


module.exports = router