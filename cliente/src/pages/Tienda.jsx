import ProdutosCards from '../components/Shop/ProdutosCards';
import { useProdutos } from '../context/ProdutosProvider'
import '../pages/syles/Tienda.css'

export default function Tienda() {
  const { produtos } = useProdutos()
  console.log(produtos)
  return (
    <div className='shop_container'>
      <section className='shop_hero'>
        <img src='' alt='' />
      </section>
      <section className='container_shop'>
        <aside className='shop_sidebar'>
          <h4>Filtros</h4>
          <div className='sidebar_cat'>
            <form action='post'>
              <label htmlFor='filter_cat'>Categorias</label>
              <select name='categorias' id='filter_cat'>
                <option value='cachorros'>Cachorros</option>
                <option value='gatos'>Gatos</option>
                <option value='cohelios'>Cohelios</option>
                <option value='passaros'>Pássaros</option>
                <option value='peixes'>Peixes</option>
              </select>
            </form>
          </div>
        </aside>
        <main className="shop_main_container">
          <h1>Nossa Tienda</h1>
          <div className="shop_produtos_container">
            <div className="produtos_container">
                {
                  produtos.map((produto) =>(
                    <ProdutosCards
                    key={produto._id}
                    image={produto.image.secure_url}
                    titulo={produto.titulo}
                    categoria={produto.categoria}
                    valor={produto.valor}
                    />
                  ))
                }
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
