import { useEffect, useState } from 'react';
import { useProdutos } from '../context/ProdutosProvider' 
import { useParams, useNavigate } from 'react-router-dom';
import './syles/PaginadoProduto.css';

export default function PaginaDoProduto() {
  const { deleteProduct, getProduct } = useProdutos();
  const params = useParams();
  const navigate = useNavigate();

  const [produto, setProduto] = useState({
    titulo: '',
    categoria: '',
    categoriaProduto: '',
    descripcao: '',
    valor: '',
    image: ''
  });
  
  let porcentagem = (produto.valor * 20) / 100;
  porcentagem += produto.valor;

  useEffect(() => {
    (async() => {
      const produto = await getProduct(params.id);
      setProduto(produto)
    })();
  }, []);

  
  return (
    <section className='produ_container'>
      <div className='produ_img'>
        <img src={produto.image.secure_url} alt={produto.titulo} />
      </div>
      <div className='produ_info'>
        <div className='produ_txt'>
          <h2 className='produ_title'>{produto.titulo}</h2>
          <span className='produ_cat'>{produto.categoriaProduto}</span>
          <p className='produ_descrip'>{produto.descripcao}</p>
          <div className='btn_group'>
            <button
              className='btn_update'
              onClick={() => navigate('/editar-produto/' + params.id)}
            >
              Editar
            </button>
            <button
              className='btn_delete'
              onClick={() => deleteProduct(params.id)}
            >
              Deletar
            </button>
          </div>
        </div>
        <div className='produ_valor'>
          <span className='valor_real'>R$ {porcentagem}</span>
          <p>R$ {produto.valor}</p>
        </div>
      </div>
    </section>
  );
}
