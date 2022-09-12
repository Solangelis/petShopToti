import mongoose from 'mongoose'
import * as dotenv from'dotenv'

const db = mongoose
dotenv.config()
db.connect(process.env.MONGO_URI)
.then(()=>{
   console.log('Conectado a Base de dados ');
})
.catch((err)=>console.log(err))

export default db;