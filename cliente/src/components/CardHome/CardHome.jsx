import React from "react";
import imagepet from  '../imagCard/imagepet.jpg'


export function CardHome() {
    return(
       <div>
        <h1>O que os clientes falam sobre nossa empressa </h1>
<p>Os clientes falam que eles sentem com alegria quando os pets são áqui</p>
<img src={imagepet} alt='imagepet' width ={'40px'} />
       </div> 
    )
}
export default CardHome;

