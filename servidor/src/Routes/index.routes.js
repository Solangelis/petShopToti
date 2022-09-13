import Router from 'express'
import Produto from '../models/Produtos.js'
import { uploadImage, deleteImage }  from '../utils/bucket.js'
import uploadFiles from 'express-fileupload'
import fs  from 'fs-extra'


const router = Router()

//Criar Produto
router.post('/api/produtos', uploadFiles({
  useTempFiles: true,
  tempFileDir: './uploads/'
}), async (req, resp) => {
    try {
        const { categoria, categoriaProduto, titulo, descripcao, valor } = req.body
        const produto = new Produto({
            categoria,
            categoriaProduto,
            titulo,
            descripcao,
            valor
        })
        
        if(req.files?.image){
            const resultado = await uploadImage(req.files.image.tempFilePath)
            produto.image={
                public_id: resultado.public_id,
                secure_url: resultado.secure_url
            }
            await fs.unlink(req.files.image.tempFilePath)
        }
        await produto.save()
        return resp.status(200).json(produto)

    } catch (error) {
        return resp.status(400).json({ message: error.message })
    }
})

//Listar todos os Produtos
router.get('/api/produtos', async (req, resp) => {
    try {
        const produtos = await Produto.find()
        resp.status(200).json(produtos)
        
    } catch (error) {
        resp.status(404).json({message: error.message})
    }
})


//Listar um só Produto
router.get('/api/produtos/:id',  async (req, resp) => {
    try {
        const produto = await Produto.findById(req.params.id)
        resp.status(200).json(produto)
        
    } catch (error) {
        resp.status(404).json({message: error.message}).end()
    }
})

//Editar um produto
router.put('/api/produtos/:id', uploadFiles({
  useTempFiles: true,
  tempFileDir: './uploads/'
}), async (req, resp)=>{
  try {
    const { id }= req.params
    const produto = await Produto.findByIdAndUpdate(id, req.body, {
      new: true
    })
    console.log(produto)

    if(!produto){
      return resp.status(204).json({Message: 'Produto nao encontrado'})
    }

    if(produto.image?.public_id){
      await deleteImage(produto.image.public_id)
      const resultado = await uploadImage(req.files.image.tempFilePath)
            produto.image={
                public_id: resultado.public_id,
                secure_url: resultado.secure_url
            }
            await fs.unlink(req.files.image.tempFilePath)
            await produto.save()
      
            
    }
      return resp.status(200).json(produto)

} catch (error) {
    return resp.status(400).json({ message: error.message }).end()
}
})

//Deletar Produto
router.delete('/api/produtos/:id', async (req, resp) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id)
    if(!produto){
      return resp.status(404).json({Message: 'Produto Nao Encontrado'})
    }

    if(produto.image?.public_id){
      await deleteImage(produto.image.public_id)
    }
    
        resp.status(200).json(produto)
    } catch (error) {
        resp.status(400).json({ message: error.message }).end()
    } 
})


export default router