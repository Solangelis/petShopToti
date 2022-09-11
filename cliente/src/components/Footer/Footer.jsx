import React from 'react';
import Boleto from '../images/boleto.png';
import Visa from '../images/visa.jpg';
import Hipercard from '../images/hipercard.png';
import Mastercard from '../images/mastercard.png';
import './Footer.css';

function Footer() {
  return (
    <div className='footer_container'>
      <div className='footer'>
        <div className='my-footer'>
          <h3>Institucional</h3>
          <ul>
            <li>
              <a href='#'>Sobre a empresa FOFINHOS-PETSHOP</a>
            </li>
            <li>
              <a href='#'>Como Comprar</a>
            </li>
            <li>
              <a href='#'>Segurança</a>
            </li>
            <li>
              <a href='#'>Envio</a>
            </li>
          </ul>
        </div>
        <div className='my-footer'>
          <h3>Atendimento</h3>
          <ul>
            <li>
              <a href='#'>Atendimento</a>
            </li>
            <li>
              <a href='#'>(11)9336-0987</a>
            </li>
            <li>
              <a href='#'>contatoPetShop.com</a>
            </li>
          </ul>
        </div>
        <div className='redes'>
          <h3>Formas de Pagamento</h3>
          <span>
            <img src={Boleto} alt='boleto' width={'60px'} />
            <img src={Visa} alt='visa' width={'50px'} />
            <img src={Hipercard} alt='hipercard' width={'60px'} />
            <img src={Mastercard} alt='mastercard' width={'35px'} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
