import app from './src/app.js'
import './db.js'

const PORT = 3001
app.listen(PORT, ()=>{
   console.log(`app rodando na porta ${PORT}`)
})