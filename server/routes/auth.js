const express = require('express')
const router = express.Router()
const { AuthController } = require("../controllers/Auth")
const controller = new AuthController

/* Login */
router.post('/', controller.login)

module.exports = router