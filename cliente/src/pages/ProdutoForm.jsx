import api from '../api/produtos';
import { useState } from 'react';

export default function ProdutoForm() {
  const [categoria, setCategoria] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descripcao, setDescripcao] = useState('');
  const [valor, setValor] = useState('');
  const [image, setImage] = useState();

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('categoria', categoria);
    data.append('titulo', titulo);
    data.append('descripcao', descripcao);
    data.append('valor', valor);
    data.append('image', image);

    const response = await api.post('/produtos', data);
    console.log('Seu Contato foi salvo com sucesso', response);
  };
  
  return (
    <div className='container'>
      <h2>Cadastrar novo Produto</h2>
      <form onSubmit={handleClickSubmit} className='registerProducto'>
        <div className='resgister-form-group'>
          <label htmlFor='categoria'>Categoria</label>
          <input
            type='text'
            name='categoria'
            id='categoria'
            onChange={(e) => setCategoria(e.target.value)}
            placeholder='Categoria'
          />
        </div>

        <div className='resgister-form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input
            type='text'
            name='titulo'
            id='titulo'
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className='resgister-form-group'>
          <label htmlFor='descripcao'>Descripcao</label>
          <input
            type='text'
            name='descripcao'
            id='descripcao'
            onChange={(e) => setDescripcao(e.target.value)}
          />
        </div>
        <div className='resgister-form-group'>
          <label htmlFor='valor'>Valor</label>
          <input
            type='text'
            name='valor'
            id='valor'
            onChange={(e) => setValor(e.target.value)}
          />
        </div>
        <div className='resgister-form-group'>
          <label htmlFor='image'>Image</label>
          <input
            type='file'
            name='image'
            id='image'
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div>
          <button type='submit'>Cadastrar</button>
        </div>
      </form>
    </div>
  );
}
