const express = require('express')
const router = express.Router()
const elementController = require('../Controllers/elementController')


router.get('/', elementController.findAll)
router.get('/:id', elementController.findById)
router.post('/', elementController.addElement)
router.put('/:id', elementController.updateElement)

module.exports = router