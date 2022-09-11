const express = require('express')
const cors = require('cors')
const rotas = require('./Routes/index.routes') 
const morgan = require('morgan')


const app = express()
app.use(cors())

//middelwares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Rotas
app.use(rotas)


module.exports = app