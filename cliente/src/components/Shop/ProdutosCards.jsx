import React from 'react';
import '../Shop/styles/ProdutosCards.css'

export default function ProdutosCards({ image, titulo, categoria, valor }) {
  return(
    
  <div className="cardShop_container">
    <div className="imgShop_container">
      <img src={image} alt="" />
    </div>
    <div className="shopCard_info">
      <h4> {titulo} </h4>
      <p> {categoria} </p>
      <span>  </span>
      <span> {valor} </span>
      <button>Comprar</button>
    </div>
  </div>  

    
  
  );
}
