const { Schema, model } = require('mongoose')

const produtoSchema = new Schema({
   categoria:{
      type:String,
      required: true
   },
   titulo:{
      type: String,
      required: true
   },
   descricao:{
      type: String,
      required: true
   },
   valor:{
      type: Number,
      required:true
   },
   imageUrl:{
      type: String
   }
})

const Produto = model('Produto', produtoSchema)

module.exports= Produto