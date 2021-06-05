const User = require('../models/user')
const jwt = require('jsonwebtoken')
const {config:{jwtAccessTokenSecret}} = require('../config/config')

const authService =  {
  login: async (email) => {
    
    let user
    let error

    await User.find({email:email})
    .then((foundUser) => user = foundUser[0])
    .catch((error) => error = new Error(error))

    console.log(jwtAccessTokenSecret)
    console.log(user)
    const payload = JSON.stringify(user)
    console.log(payload)
    const accessToken = jwt.sign(jwtAccessTokenSecret, payload)
    console.log(accessToken)
    return accessToken ? {jwt:accessToken} : error
  }
}

module.exports = authService