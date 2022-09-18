import React from "react";
import Card from "./Card";
import imagen from "../assets/imagen.jpg";


const Cards = [
  {
    id: 1,
    title: 'Cachorro',
    imagen: imagen,
    //url: 'https://faztweb.com'
  },

  {
    id: 2,
    title: 'Gatos',
    imagen: imagen,
    //url: 'https://blog.faztweb.com'
  },

  {
    id: 3,
    title: 'Passaros',
    imagen: imagen,
    //url:'https://youtube.faztweb.com'
  },
]

function card() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {
          Cards.map(card => (
            <div className="col-md-4" key={card.id}>
              <Card title={card.title} imagenSource={card.imagen} url={card.url} />
            </div>
          ))
        }
      </div>
    </div>

  )

}

export default card;        