import mongoose from 'mongoose'

const produtoSchema = new mongoose.Schema({
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
},{
   versionKey: false
})

const Produto = mongoose.model('Produto', produtoSchema)

export default  Produto