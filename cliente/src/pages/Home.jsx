import { useProdutos } from '../context/ProdutosProvider';
import Card from '../components/Cards/Card';
import { useNavigate, Link } from 'react-router-dom';
import './syles/Home.css';
import CardHome from '../components/CardHome/CardHome';
import CategoryCards from '../components/CategoryCards/CategoryCards';
import Ours from '../components/Ours_Services/Ours';
import About from '../components/About/About';

const Home = () => {
  const { produtos } = useProdutos();
  const navigate = useNavigate();
  return (
    <>
      <section className='hero_container'>
        <div className='hero_content'>
          <h1>Estamos sempre aqui pela boa saúde de todos os seus Pets</h1>
          <Link to='/tienda'>
            <button>Compre agora</button>
          </Link>
        </div>
        <div className='hero_image'>
          <img src='../../public/img/cachorro11.png' alt='' />
        </div>
      </section>
      <section className='banner_hero'>
        <div className='banner_hero_content'></div>
        <div className='banner_hero_content'>
          <div className='banner_text'>
            <span className='big_text'>200K+</span>
            <p>Animais alimentados</p>
          </div>
          <div className='banner_text'>
            <span className='big_text'>R$5</span>
            <p>Venda do produto</p>
          </div>
          <div className='banner_text'>
            <span className='big_text'>97%</span>
            <p>Clientes satisfeitos</p>
          </div>
        </div>
      </section>
      <main className='main'>
        <About />
        <section className='categoria_section'>
          <h2>Categorias em destaque</h2>
          <div className='category_cards_container'>
            <CategoryCards image={5} categoria={'Coelhos'} />
            <CategoryCards image={2} categoria={'Gatos'} />
            <CategoryCards image={1} categoria={'Cachorros'} />
            <CategoryCards image={3} categoria={'Pássaros'} />
            <CategoryCards image={4} categoria={'Peixes'} />
          </div>
          <div className='main_wraper'>
            {produtos.map((produto) => (
              <Card
                key={produto._id}
                image={produto.image ? produto.image.secure_url : null}
                titulo={produto.titulo}
                categoria={produto.categoria}
                descripcao={produto.descripcao}
                valor={produto.valor}
                onClick={() => navigate(`/produtos/${produto._id}`)}
              />
            ))}
          </div>
        </section>
        <section className='home__servicios'>
          <h2>Nossos serviços</h2>
          <div className='home__servicios-cards'>
            <Ours />
          </div>
        </section>
        {/* <CardHome /> */}
      </main>
    </>
  );
};

export default Home;
