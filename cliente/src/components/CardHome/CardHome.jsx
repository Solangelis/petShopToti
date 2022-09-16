import React from "react";
import imagepet from './imagCard/imagepet.jpg'   


export function CardHome() {
    return(
       <div>
        <h1>Estamos sempre aqui pela boa saúde de todos os seus Pets</h1>
<p>Os clientes falam que eles sentem com alegria quando os pets são áqui</p>
<img src={imagepet} alt='imagepet' width ={'40px'} />
       </div> 
    )
}
export default CardHome;

