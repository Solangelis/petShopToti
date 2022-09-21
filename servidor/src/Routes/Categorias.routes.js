import Router from 'express'
import Categorias from '../models/Categorias.js'

const routerCat = Router()

//C
routerCat.post('/api/categorias', (req, res) => {
  const { titulo } = req.body;

  const categoria = new Categorias({
    titulo,
  })
  categoria.save()
  res.json(categoria)
})
//R
routerCat.get('/api/categorias', async (req, res) => {
  try {
    const categorias = await Categorias.find()
    if(!categorias){
      res.status(404).send('<h1>Categoria não encontrada</h1>')
    }
    res.json(categorias)
  } catch (error) {
    res.json({'message': error.menssage})
  }
})

//U
routerCat.put('/api/categorias/:id', (req, res) => {
  const { id } = req.params;
  // const { titulo } = req.body;

  const categorias = Categorias.findByIdAndUpdate(id, req.body)
  res.json(categorias)
})

//D
routerCat.delete('/api/categorias/:id', (req, res) => {
  const { id } = req.params
  Categorias.findByIdAndDelete(id)

  res.status(204)
})


export default routerCat