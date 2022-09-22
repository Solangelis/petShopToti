import { useEffect } from 'react';
import ProdutosCards from '../components/ProdutosCards/ProdutosCards';
import { useProdutos } from '../context/ProdutosProvider';
import { useNavigate } from 'react-router-dom';
import '../pages/syles/Tienda.css';

export default function Tienda() {
  const { search, getProducts } = useProdutos();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts()
  }, [])
  

  const result = search.map((produto) => (
    <ProdutosCards
      key={produto._id}
      image={produto.image.secure_url}
      titulo={produto.titulo}
      categoria={produto.categoria}
      valor={produto.valor}
      onClick={() => navigate(`/produtos/${produto._id}`)}
    />
  ));
  const productList = result?.length ? (
    result
  ) : (
    <article>
      <p>Produto Nao Encontrado</p>
    </article>
  );

  return (
    <div className='shop_container'>
      <section className='shop_hero'>
        <div className='hero__overlay'>
          <h1>Nossa Tienda</h1>
        </div>
      </section>
      <main className='shop_main_container'>
        <div className='produtos_container'>{productList}</div>
      </main>
    </div>
  );
}
