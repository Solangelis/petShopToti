const { application } = require('express')
const Router = require ('express')
const router = Router()
router.post('/api/produtos', (req, resp)=>{
    resp.send('produto criado com sucesso')

}) 
router.get('/api/produtos', (req, res) =>{
    res.send('todos os produtos')
})



module.exports=router
