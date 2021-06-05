const mongoose = require('mongoose')
const { serverResponse } = require('../helpers/utility')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    required: false
  }
}, { timestamps: true})

userSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    const dublicateKey = Object.keys(error.keyPattern)[0]
    next(serverResponse(false, `Duplicate entry error with "${dublicateKey}" key`, dublicateKey));
  } else {
    console.log(`Unhandled error when creating user: ${error}`)
    next(serverResponse(false,`Unhandled error when creating user`));
  }
});

const User = mongoose.model('User', userSchema)

module.exports = User