import React from "react";
import imagepet from  '../images/imagepet.png'
import './CardHome'


export function CardHome() {
    return(
       <div>
        <h2>O que os clientes falam sobre nossa empressa </h2>
<p>Os clientes falam que eles sentem com alegria quando os pets são áqui</p>
<img src={imagepet} alt='imagepet' />
       </div> 
    )
}
export default CardHome;

