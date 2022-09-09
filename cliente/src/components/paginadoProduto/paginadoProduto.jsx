import React from "react";
import images from '../images/higienica.jpg';
import images from '../images/higienica1.jpg';
import images from '../images/raçao.jpg';
import images from '../images/sanitario.jpg'
import './paginaProduto.css';

function paginadoProduto() {
    return(
        <div className="App">
                  <img src={require('./images/higienica.jpg')} />
          <p>Areia Higiênica de Bentonita Econômica para Gatos - 4 kg
            BT03200</p><br></br>
          <p>R$ 10,41</p>
  
          <img src={require('./images/higienica1.jpg')} />
          <p>Areia Higiênica de Bentonita Premium para Gatos</p><br>
          </br><br></br>
          <p>R$ 34,97</p>
  
          <img src={require('./images/raçao.jpg')} />
          <p>
            FRETE GRÁTIS
            Ração GranPlus Frango e Arroz para Gatos Filhotes - 3 Kg
            84</p><br></br>
          <p>R$ 63,90</p>
  
          <img src={require('./image/sanitario.jpg')} />
          <p>Areia Sanitária Cristais de Sílica para Gatos - 1,6 Kg
            SL01118</p><br></br>
          <p>R$ 39,90</p>
          </div> )} 

export default paginadoProduto