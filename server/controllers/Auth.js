'use strict';
const {login} = require('../services/auth')

class AuthController {
  async login(req, res, next) {
    try {
      // get username provided from req
      // check password if match
      const user = await login("test@test.com1");
      res.send(user);
    } catch (error) {
      console.log(error)
      next(e);
    }
  }
}

module.exports = {AuthController};