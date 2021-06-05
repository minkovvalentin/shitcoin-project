'use strict';
const { getScrapeCoinDetails, getApiCoinDetails } = require("../services/externalCoins")

class ExternalCoinsController {
  async getScrapeCoinDetails(req, res, next) {
    try {
      const coinDetails = await getScrapeCoinDetails();
      res.send(coinDetails);
    } catch (error) {
      console.log(error)
      next(e)
    }
  }

  async getApiCoinDetails(req, res, next) {
    try {
      const coinDetails = await getApiCoinDetails();
      res.send(coinDetails);
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}

module.exports = {ExternalCoinsController};