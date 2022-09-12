import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import rotas from './Routes/index.routes.js';


const app = express()
app.use(cors())
app.use(morgan('dev'))


//middelwares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Rotas
app.use(rotas)


export default app