import { useState, useEffect } from 'react';
import api from '../api/produtos';
import Card from '../components/Cards/Card';
import { useNavigate } from 'react-router-dom'
import './syles/Home.css';

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const history = useNavigate()

  const fetchProdutos = async () => {
    const res = await api.get('/produtos');
    setProdutos(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <>
      <div className='hero_container'>
        <div className='hero_content'>
          <h1>Estamos sempre aqui pela boa saúde de todos os seus Pets</h1>
          <button>Compre agora</button>
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
                image={produto.image.secure_url}
                titulo={produto.titulo}
                categoria={produto.categoria}
                descripcao={produto.descripcao}
                valor={produto.valor}
                onClick={() => history(`/produtos/${produto._id}`)}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
