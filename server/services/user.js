const bcrypt = require('bcrypt')
const saltRounds = 10
const { serverResponse } = require('../helpers/utility');
const User = require('../models/user')

const userService =  {
  createUser: async () => {
    let response 

    // Encrypt password
    const hash = await bcrypt.hash('testpassword', saltRounds)

    const newUser = {
      username : 'someuser',
      email: 'someemail@someemail.com',
      password: hash
    }

    /* Atempting to create user */
    await User.create(newUser)
      .then((result) => response =  serverResponse(true, 'User created', result.username))
      .catch((error) => response = error )

    console.log(`the error ${JSON.stringify(response)}`)
    return response;  
  },

  get: async (email) => {
    return {}
  }
}

module.exports = userService