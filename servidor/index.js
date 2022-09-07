const app = require('./src/app')
const db = require('./db')

const PORT = 3001
app.listen(PORT, ()=>{
   console.log(`app rodando na porta ${PORT}`)
})