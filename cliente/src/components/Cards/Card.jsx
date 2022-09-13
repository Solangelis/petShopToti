import './Card.css';

//section que contem as cards
let sectionconteudos = document.querySelector('.conteudo');
// endereço do Bd que contem os arquivos json
const url = 'cards.json';

function Card({ image, titulo, categoria, descripcao, valor, onClick }) {
  return (
    <section className='cards_section'>
      <div className='cards_container'>
        <article className='card' onClick={onClick}>
          <div className='img_card'>
            <img id='foto' className='produto_img' src={image} alt='foto' />
          </div>
          <div className='info_cards'>
            <div className='card_title'>
              <h4>{titulo}</h4>
              <span> {categoria} </span>
            </div>
            <div className='card_rates'>
              <span className='valor'>R$ {valor}</span>
              {/* <p className='card_description'>{descripcao}</p> */}
            </div>
            {/* <div className='btn_card' id='btn'>
              <button className='card_btn'>Comprar</button>
            </div> */}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Card;
