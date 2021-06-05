const { config:{ port, dbPassword, dbUser, db }  } = require('./config/config')
const { mongorURI } = require('./config/config')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const routes = require('./routes')
const app = express()
const mongoose = require('mongoose');
const dbUri = mongorURI(dbUser, dbPassword, db);

app.use(cors())
app.use(morgan('tiny'))
app.use('/', routes);

app.use(express.json());

/* 
  Connect to database and if succesfull listen on port
*/
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => {
    console.log("Connected to db")
    app.listen(port, () => console.log(`Server listening at port ${port}`)
  )}
)
.catch((error) => console.log(`Error connecting to database: ${error}`))


