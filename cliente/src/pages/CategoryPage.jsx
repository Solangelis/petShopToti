import { useEffect } from 'react';
// import { useProdutos } from '../context/ProdutosProvider'
import Card from '../components/Cards/Card';

export default function CategoryPage() {
  // const { produtos, setProdutos } = useProdutos();

 
 
  return (
    <div>
      <h1>Página de Categoria</h1>
      {setProdutos(produtos.map((produto) => {
        <div className='category_container'>
          <div className='category_card'>
            <div className='image_category'>
              <img src='' alt='' />
            </div>
            <div className='info_produto'>
              <h3> {produto.titulo} </h3>
              <span className='category_produto'>{produto.categoria}</span>
              <span> {produto.valor} </span>
            </div>
          </div>
        </div>;
      }))}
    </div>
  );
}
