const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')

router.get('/add', UserController.newUser)
router.post('/add', UserController.newUserSave)
router.get('/edit/:id', UserController.updateUser)
router.post('/edit', UserController.updateUserSave)
router.post('/remove', UserController.removeUser)
router.get('/allUsers', UserController.allUsers)
router.get('/', UserController.home)

module.exports = router