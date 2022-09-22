import { useProdutos } from '../../context/ProdutosProvider'
import '../ProdutosCards/ProdutosCards.css'



export default function ProdutosCards({ image, titulo, categoria, valor, onClick }) {
  const { produtos } = useProdutos()
  console.log(produtos);

  return (
    <div className='cardShop_container' onClick={onClick}>
      <div className='imgShop_container'>
        <img src={image} alt={titulo} />
      </div>
      <div className='shopCard_info'>
        <h4> {titulo} </h4>
        <p> {categoria} </p>
        <span> </span>
        <span className='cards_valor'>R$ {valor} </span>
        <button>Comprar</button>
      </div>
    </div>
  );
}
/* {produtos.map((produto) => (
                <ProdutosCards
                  key={produto._id}
                  image={produto.image.secure_url}
                  titulo={produto.titulo}
                  categoria={produto.categoria}
                  valor={produto.valor}
                  produtos={produtos}
                  onClick={() => navigate(`/produtos/${produto._id}`)}
                />
              ))} */