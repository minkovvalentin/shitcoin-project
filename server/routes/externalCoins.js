const express = require('express')
const router = express.Router()
const {ExternalCoinsController} = require("../controllers/ExternalCoins")
const controller = new ExternalCoinsController

/*Get Scraped Coin Details */
router.get('/scrape-coin-details', controller.getScrapeCoinDetails)

/*Get Api Coin Detials */
router.get('/coin-details', controller.getApiCoinDetails)

module.exports = router