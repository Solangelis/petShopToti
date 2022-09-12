import './Card.css';

//section que contem as cards
let sectionconteudos = document.querySelector('.conteudo');
// endereço do Bd que contem os arquivos json
const url = 'cards.json';

function Card({ image, titulo, categoria, descripcao, valor }) {
  return (
    <section className='conteudo'>
      <div className='cards_container'>
        <article className='card'>
          <div className='img_card' id='img_card'>
            <img id='foto' className='foto' src={image} alt='foto' />
          </div>
          <div>
            <h4>{titulo}</h4>
          </div>
          <div>
            <h2 id='nome_do_produto' className='nome_do_produto'>
              {titulo}
            </h2>
            <h3 id='marca_do_produto' className='marca'>
              {categoria}
            </h3>
            <h2 id='preço' className='preço'>
              {valor}
            </h2>
            <p className='card_description'>{descripcao}</p>
          </div>
          <div className='btn_card' id='btn'>
            <button className='card_btn'>Comprar</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Card;
