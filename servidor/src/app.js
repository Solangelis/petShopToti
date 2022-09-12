const express = require('express')
const cors = require('cors')
const rotas = require('./Routes/index.routes') 
const app = express()

app.use(express.json())
app.use(cors())

//middelware
app.use(rotas)


module.exports = app