const express = require ('express')
const router = express.Router()
const chefProjetController = require('../Controllers/chefProjetController')

router.get('/afficher',chefProjetController.afficher)

module.exports = router