'use strict';
const {getAll, getSingle, createCoin, editCoin} = require('../services/localCoins')
class LocalCoinsController {

  async getAll(req, res, next) {
    try {
      // res.send(user);
    } catch (error) {
      console.log(error)
      next(e);
    }
  }

  async getSingle(req, res, next) {
    try {
    } catch (error) {
      console.log(error)
      next(e);
    }
  }

  async createCoin(req, res, next) {
    try {
    } catch (error) {
      console.log(error)
      next(e);
    }
  }

  async editCoin(req, res, next) {
    try {
    } catch (error) {
      console.log(error)
      next(e);
    }
  }

}

module.exports = { LocalCoinsController };