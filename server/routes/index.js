const express = require('express');
const rootRouter = express.Router();

const auth = require('./auth');
const user = require('./user');
const externalCoins = require('./externalCoins');
const localCoins = require('./externalCoins');

rootRouter.use('/login', auth);
rootRouter.use('/user', user);
rootRouter.use('/external-coins', externalCoins);
rootRouter.use('/localCoins', localCoins);

module.exports = rootRouter;
