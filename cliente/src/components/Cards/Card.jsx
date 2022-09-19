import './Card.css';
import { VscAdd } from 'react-icons/vsc';

function Card({ image, titulo, valor, onClick }) {
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
            </div>
            <div className='card_ratesbtn'>
              <div className='card_rates'>
                <span className='valor'>R$ {valor}</span>
              </div>
              <div className='btn_card' id='btn'>
                <VscAdd className='btn_plus' />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Card;
