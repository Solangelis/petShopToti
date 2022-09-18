import { useProdutos } from '../context/ProdutosProvider';
import Card from '../components/Cards/Card';
import { useNavigate, Link } from 'react-router-dom';
import './syles/Home.css';


const Home = () => {
  const { produtos } = useProdutos();
  const navigate = useNavigate();
  return (
    <>
      <div className='hero_container'>
        <div className='hero_content'>
          <h1>Estamos sempre aqui pela boa saúde de todos os seus Pets</h1>
          <Link to='/criar-produto'>
            <button>Compre agora</button>
          </Link>
        </div>
        <div className='hero_image'>
          <img src='' alt='' />
        </div>
      </div>
      <main className='main'>
        <section className='categoria_section'>
          <h2>Categorias em destaque</h2>
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
      </main>
    </>
  );
};

export default Home;
