const express = require('express')
const rotas = require('./Routes/index.routes') 
const app = express()
app.use(rotas)

module.exports = app