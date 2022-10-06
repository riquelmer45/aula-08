const express = require('express')
const router = express.Router()
const UserController = require('../controllers/carrosController')

router.get('/add', UserController.newCarro)
router.post('/add', UserController.newCarroSave)
router.get('/edit/:id', UserController.updatecarros)
router.post('/edit', UserController.updateCarrosSave)
router.post('/remove', UserController.removeCarros)
router.get('/allCarros', UserController.allCarros)
router.get('/', UserController.home)

module.exports = router