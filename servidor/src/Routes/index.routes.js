const { application } = require('express')
const Router = require ('express')
const router = Router()
router.post('/api/produtos', (req, resp)=>{
    resp.send('produto criado com sucesso')
}) 

module.exports=router
