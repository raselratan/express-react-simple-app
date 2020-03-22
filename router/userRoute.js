const express = require('express')
const router = express.Router()

const {register,login} = require('../controllers/userController')

//registration router
router.post('/register', register)

//login router
router.post('/login',login)

module.exports = router