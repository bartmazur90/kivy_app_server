const express = require('express')
const router = express.Router()

const routesContollers = require('../controllers/routesController')
const auth = require('../auth/auth')


// AUTH ROUTES
router.post('/login', routesContollers.login) 
// router.post('/confirm_token', auth.confirmToken, routesContollers.sendConfirm)


// router.post('/rpa/:vm/status_update', auth.verifyApiKey, vmStatusControllers.vmsUpdate)

// TEST ROUTES
router.get('/', routesContollers.sendWelcomeMsg)
router.get('/socket-test', routesContollers.socketTest)

module.exports = router