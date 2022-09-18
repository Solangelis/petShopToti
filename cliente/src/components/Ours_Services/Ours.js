import React from "react";





function Card({title,imagenSource,url}) {
  return(
    

    <div className="card text-center bg-dark">
      <img src={imagenSource} alt="" />
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-secondary"> Lorem ipsum sit ame</p>
        <a href={url} className="btn btn-outline-primary rounded-0" target="_black">
          Go to this website
        </a>
        </div>

      </div>
     
    
  )
}
export default Card