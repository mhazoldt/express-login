var express = require('express')
var router = express.Router()

let indexController = require('../controllers/indexController')
let loginController = require('../controllers/loginController')

router.get('/', indexController.index)

router.get('/login', loginController.login)

router.post('/login', loginController.submitForm)

module.exports = router