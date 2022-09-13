import mongoose from 'mongoose'

const produtoSchema = new mongoose.Schema({
   categoria:{
      type:String,
      required: true
   },
   categoriaProduto:{
      type: String,
      required: true
   },
   titulo:{
      type: String,
      unique: true,
      trim: true,
      required: true

   },
   descripcao:{
      type: String,
      required: true
   },
   valor:{
      type: Number,
      required: true
   },
   image:{
      public_id:String,
      secure_url: String,
      
   }
},{
   versionKey: false
})

const Produto = mongoose.model('Produto', produtoSchema)

export default  Produto