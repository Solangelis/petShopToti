const express = require('express')
const rotas = require('./Routes/index.routes') 
const morgan = require('morgan')


const app = express()


//middelwares
app.use(morgan('dev'))
app.use(express.json())

app.use(rotas)
app.use(express.urlencoded({extended: false}))


module.exports = app