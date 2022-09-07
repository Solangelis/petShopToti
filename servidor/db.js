const db = require('mongoose')
require('dotenv').config()

db.connect(process.env.MONGO_URI)
.then(()=>{
   console.log('Conectado a Base de dados ');
})
.catch((err)=>console.log(err))

module.exports = db;