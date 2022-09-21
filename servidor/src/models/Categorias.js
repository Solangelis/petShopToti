import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
  titulo:{
    type:String,
  }
},{
  versionKey:false
})

const Categorias = mongoose.model('Categoria', categoriaSchema)

export default Categorias