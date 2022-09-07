const Router = require('express')
const produtoModel = require('../models/Produtos')
const router = Router()

//Criar Produto
router.post('/api/produtos', (req, resp) => {
    const produto = produtoModel(req.body)
    produto.save()
        .then((dado) => resp.status(200).json(dado))
        .catch((err) => resp.status(400).json({ message: err }).end())
})

//Listar todos os Produtos
router.get('/api/produtos', (req, resp) => {
    produto.find()
        .then((dado) => resp.status(200).json(dado))
        .catch((err) => resp.status(400).json({ message: err }).end())
})


//Listar um só Produto
router.get('/api/produtos/:id', (req, res) => {
    const { id } = req.params

    produto.findById(id)
        .then((dado) => resp.status(200).json(dado))
        .catch((err) => resp.status(400).json({ message: err }).end())
})

//Deletar Produto
router.delete('/api/produtos/:id', (req, resp) => {
    const{id} = req.params
    produto.findByIdAndDelete(id)
        .then((dado) => resp.status(200).json(dado))
        .catch((err) => resp.status(400).json({ message: err }).end())
})






module.exports = router
