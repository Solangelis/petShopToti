const express = require('express')
const rotas = require('./Routes/index.routes') 
const uploadFiles = require('express-fileupload')
const morgan = require('morgan')


const app = express()


//middelwares
app.use(morgan('dev'))
app.use(express.json())
app.use(uploadFiles({
   useTempFiles: true,
   tempFileDir: './uploads/'
}))
app.use(rotas)
app.use(express.urlencoded({extended: false}))


module.exports = app