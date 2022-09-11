import React from "react";
import "./Card.css";

//section que contem as cards
let sectionconteudos = document.querySelector('.conteudo')
// endereço do Bd que contem os arquivos json
const url = 'cards.json'

function pegarDados(i) {
    fetch(url)
    .then(Response => Response.json() )
    .then(daddos => {
        if(daddos.erro) {
            console.log("erro ao acessar o JSON")
        }
    })
}


function Card (props) {
    return (
        <div className="container">
            <h2>Ração para Fofinhos Pet</h2>
            <section className="conteudo">
                <article className="Card">
                    <div>titulo</div>
                    <div className="img_card" id="img_card"><img id="foto" className="foto" src="" alt="foto"/></div>
                    <div>
                        <h2 id="nome_do_produto" className="nome_do_produto">{props.nome}</h2>
                        <h3 id="marca_do_produto" className="marca">{props.marca}</h3>
                        <h2 id="preço" className="preço">{props.preço}</h2>
                        <p className="card_description">{props.description}</p>
                    </div>
                    <div className="btn_card" id="btn">
                        <button className="card_btn">Comprar</button>
                    </div>
                </article>
                
            </section>
        </div>
    );
    
    

}

export default (Card)

