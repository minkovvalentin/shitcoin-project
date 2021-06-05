'use strict';
const {createUser, login} = require('../services/user')

class UserController {
  async create(req, res, next) {
    try {
      // get username provided from req
      // check password if match
      const user = await createUser();
      if(user.success === false) {
        res.status(403)
      }
      res.send(user);
    } catch (error) {
      console.log(error)
      next(e);
    }
  }

  async get(req, res, next) {
    try {
      
    } catch (error) {
      console.log(error)
      next(e);
    }
  }
}

module.exports = {UserController};