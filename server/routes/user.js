const express = require('express')
const router = express.Router()
const {UserController} = require("../controllers/User")
const controller = new UserController

/* User route */
router.route('/')
.get(controller.get)
.post(controller.create)
module.exports = router