const express = require('express')
const router = express.Router()
const carrosController = require('../controllers/carrosController')

router.get('/add', carrosController.newCarro)
router.post('/add', carrosController.newCarroSave)
router.get('/edit/:id', carrosController.updatecarros)
router.post('/edit', carrosController.updateCarrosSave)
router.post('/remove', carrosController.removeCarros)
router.get('/allCarros', carrosController.allCarros)
router.get('/', carrosController.home)

module.exports = router