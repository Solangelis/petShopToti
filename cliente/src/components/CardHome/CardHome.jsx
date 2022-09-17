import React from "react";
import imagepet from  '../images/imagepet.png'
import './CardHome'


export function CardHome() {
    return(
       <div>
        <h2>A melhor ração, para sua melhor companhia! ...</h2>
<p>Compartilhe fotos e vídeos de bichinhos antes e depois de passarem pelo banho e tosa do seu estabelecimento</p>
<img src={imagepet} alt='imagepet' />
       </div> 
    )
}
export default CardHome;

