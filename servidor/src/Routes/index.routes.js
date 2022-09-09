const Router = require('express')
const Produto = require('../models/Produtos')
const { uploadImage, deleteImage } = require('../utils/bucket')
const fs = require('fs-extra')


const router = Router()

//Criar Produto
router.post('/api/produtos', async (req, resp) => {
    try {
        const { categoria, titulo, descripcao, valor } = req.body
        const produto = new Produto({
            categoria,
            titulo,
            descripcao,
            valor
        })
        
        if(req.files?.image){
            const resultado = await uploadImage(req.files.image.tempFilePath)
            console.log(resultado)
            produto.image={
                public_id: resultado.public_id,
                secure_url: resultado.secure_url
            }
            await fs.unlink(req.files.image.tempFilePath)
        }

        await produto.save()
        resp.status(200).json(produto)

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
        const { id } = req.params
        const produto = await Produto.findById(id)
        resp.status(200).json(produto)
        
    } catch (error) {
        resp.status(404).json({message: error.message}).end()
    }
})

//Editar um produto
router.put('/api/produtos/:id', async (req, resp)=>{
    const { id }= req.params
    const { categoria, titulo, descripcao, valor, imageUrl } = req.body
try {
    const produto = await Produto.findByIdAndUpdate({_id: id},{$set: {categoria, titulo, descripcao, valor}})
    resp.status(200).json(produto)
} catch (error) {
    resp.status(400).json({ message: error.message }).end()
}
})


//Deletar Produto
router.delete('/api/produtos/:id', async (req, resp) => {
    try {
        const {id} = req.params
        const produto = await Produto.findByIdAndDelete(id)

        if(!produto){
            return resp.status(404).json({message: 'Produto não encontrado '})
        }
        
        if(produto.image?.public_id){
            await deleteImage(produto.image.public_id)
        }
        
        resp.status(200).json(produto)
    } catch (error) {
        resp.status(400).json({ message: error.message }).end()
    } 
})






module.exports = router
