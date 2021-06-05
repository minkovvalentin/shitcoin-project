const express = require('express')
const router = express.Router()
const { LocalCoinsController } = require("../controllers/LocalCoins")
const controller = new LocalCoinsController

/*Get Local Coins */
router.get('/coins', controller.getAll)

/*Coin Route */
router.route('/coin')
.get(controller.getSingle)
.post(controller.createCoin)
.put(controller.editCoin)

module.exports = router