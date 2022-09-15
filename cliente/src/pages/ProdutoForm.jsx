import api from '../api/produtos';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './syles/ProdutoForm.css';

export default function ProdutoForm() {
  const [categoria, setCategoria] = useState('');
  const [categoriaProduto, setCategoriaProduto] = useState('')
  const [titulo, setTitulo] = useState('');
  const [descripcao, setDescripcao] = useState('');
  const [valor, setValor] = useState('');
  const [image, setImage] = useState();

  //UseState Para editar
  const [editCategoria, setEditCategoria] = useState('');
  const [editCategoriaProduto, setEditCategoriaProduto] = useState('');
  const [editTitulo, setEditTitulo] = useState('');
  const [editDescripcao, setEditDescripcao] = useState('');
  const [editValor, setEditValor] = useState('');
  const [editImage, setEditImage] = useState();

  const navigate = useNavigate()
  const params = useParams()

  const fetchEdit = async () =>{
    const res = await api.get('/produtos/' + params.id);
    setEditCategoria(res.data.categoria);
    setEditCategoriaProduto(res.data.categoriaProduto);
    setEditTitulo(res.data.titulo);
    setEditDescripcao(res.data.descripcao);
    setEditValor(res.data.valor)
    setEditImage(res.data.image)
    console.log(res.data);
  }
  
  useEffect(() => {
    if(params.id){
      fetchEdit();
    }
  }, [])
  
  const handleEdit = async (e) => {
    e.preventDefault()
    const dataEdit = new FormData();
    dataEdit.append('categoria', editCategoria);
    dataEdit.append('categoriaProduto', editCategoriaProduto);
    dataEdit.append('titulo', editTitulo);
    dataEdit.append('descripcao', editDescripcao);
    dataEdit.append('valor', editValor);
    dataEdit.append('image', editImage);

    const res = await api.put('/produtos/' + params.id, dataEdit)
    console.log('Actualizado')
    console.log('Valor Actualizado');
    navigate('/produtos/' + params.id)

  }

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('categoria', categoria);
    data.append('categoriaProduto', categoriaProduto)
    data.append('titulo', titulo);
    data.append('descripcao', descripcao);
    data.append('valor', valor);
    data.append('image', image);


    const response = await api.post('/produtos', data);
    console.log('Seu Contato foi salvo com sucesso', response);

    navigate('/')
  };

  return (
    <div className='form_container'>
      <h2>{params.id ? 'Editar Produto' : 'Cadastrar novo Produto'}</h2>
      <form
        onSubmit={params.id ? handleEdit : handleClickSubmit}
        className='registerProducto'
      >
        <div className='resgister-form-group'>
          <label htmlFor='categoria'>Categoria</label>
          <input
            type='text'
            name='categoria'
            id='categoria'
            value={params.id ? editCategoria : categoria}
            onChange={(e) =>
              params.id
                ? setEditCategoria(e.target.value)
                : setCategoria(e.target.value)
            }
            placeholder='Categoria'
          />
        </div>

        <div className='resgister-form-group'>
          <label htmlFor='categoriaProduto'>Categoria de Produto</label>
          <input
            type='text'
            name='categoriaProduto'
            id='categoriaProduto'
            value={params.id ? editCategoriaProduto : categoriaProduto}
            onChange={(e) =>
              params.id
                ? setEditCategoriaProduto(e.target.value)
                : setCategoriaProduto(e.target.value)
            }
            placeholder='Categoria de Produto'
          />
        </div>

        <div className='resgister-form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input
            type='text'
            name='titulo'
            id='titulo'
            value={params.id ? editTitulo : titulo}
            onChange={(e) =>
              params.id
                ? setEditTitulo(e.target.value)
                : setTitulo(e.target.value)
            }
          />
        </div>
        <div className='resgister-form-group'>
          <label htmlFor='descripcao'>Descripcao</label>
          <input
            type='text'
            name='descripcao'
            id='descripcao'
            value={params.id ? editDescripcao : descripcao}
            onChange={(e) =>
              params.id
                ? setEditDescripcao(e.target.value)
                : setDescripcao(e.target.value)
            }
          />
        </div>
        <div className='resgister-form-group'>
          <label htmlFor='valor'>Valor</label>
          <input
            type='text'
            name='valor'
            id='valor'
            value={params.id ? editValor : valor}
            onChange={(e) =>
              params.id
                ? setEditValor(e.target.value)
                : setValor(e.target.value)
            }
          />
        </div>
        <div className='resgister-form-group'>
          <label htmlFor='image'>Image</label>
          <input
            type='file'
            name='image'
            id='image'
            onChange={(e) =>
              params.id
                ? setEditImage(e.target.files[0])
                : setImage(e.target.files[0])
            }
          />
        </div>
        <div>
          <button type='submit'>
            {params.id ? 'Editar Produto' : 'Cadastrar'}
          </button>
        </div>
      </form>
    </div>
  );
}
