const Router = require('express')
const produtoModel = require('../models/Produtos')
const router = Router()

//Criar Produto
router.post('/api/produtos', (req, resp) => {
    const produto = produtoModel(req.body)
    produto.save()
    .then((dado)=>resp.status(200).json(dado))
    .catch((err)=>resp.status(400).json({message: err}).end())
})

//Listar todos os Produtos
router.get('/api/produtos', (req, res) => {
    produto.find()
    .then((dado)=>resp.status(200).json(dado))
    .catch((err)=>resp.status(400).json({message: err}).end())
})


//Listar um só Produto
router.get('/api/produtos/:id', (req, res) => {
    res.send('so um produto')
})

//Deletar Produto
router.delete('/api/produtos/:id', (req, res) => {
    res.send('deletar so um produto')
})


module.exports = router
