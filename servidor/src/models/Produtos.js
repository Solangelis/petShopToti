const { Schema, model } = require('mongoose')

const produtoSchema = new Schema({
   categoria:{
      type:String,
   },
   titulo:{
      type: String,
      unique: true,
      trim: true,
      required: true

   },
   descripcao:{
      type: String,
   },
   valor:{
      type: Number,
   },
   image:{
      public_id:String,
      secure_url: String
   }
})    

const Produto = model('Produto', produtoSchema)

module.exports= Produto