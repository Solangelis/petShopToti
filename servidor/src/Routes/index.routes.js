const Router = require('express')
const router = Router()
router.post('/api/produtos', (req, resp) => {
    resp.send('produto criado com sucesso')

})
router.get('/api/produtos', (req, res) => {
    res.send('todos os produtos')
})

router.get('/api/produtos/:id', (req, res) => {
    res.send('so um produto')
})


router.delete('/api/produtos/:id', (req, res) => {
    res.send('deletar so um produto')
})


module.exports = router
