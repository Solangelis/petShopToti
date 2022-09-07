const db = require('mongoose')

db.connect('mongodb+srv://tabitha:6d8Y9SUpGaQAysLQ@cluster0.pdp0mkb.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
   console.log('Conectado a Base de dados ');
})
.catch((err)=>console.log(err))

module.exports = db;