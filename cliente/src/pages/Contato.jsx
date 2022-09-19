import styled from "styled-components";
import conta from '../components/images/conta.png';
import "./syles/Contato.css"
import React from "react";

export default function Contato() {
  return (
    <ContatosContainer>
      <div>
      <h1>Nossa página de Contato</h1>
      <br />
      <br />
      <h2>fale com nosco</h2>
      <div>
        <br />
        <ul>
          <li><a href='' target="_blank">
          <img  className='icon'src={conta}></img>
            <span>Ankys-Serrano</span>
          </a></li>
          <li><a href='https://linkedin.com/in/humbertocolmenares' target="_blank">
          <img  className='icon'src={conta}></img>
            <span>Humberto-Colmenares</span>
          </a></li>
          <li><a href='https://www.linkedin.com/in/marisa-basilio/' target="_blank">
          <img  className='icon'src={conta}></img>
            <span>Marisa-Basilio</span>
          </a></li>
          <li><a href='https://www.linkedin.com/in/solangelis-hernandez-gonzalez-098164213/' target="_blank">
          <img  className='icon'src={conta}></img>
            <span>Solangelis-Gonzales</span>
          </a></li>
          <li><a href='https://www.linkedin.com/in/philistin-destin-tabitha-039b65241/' target="_blank">
          <img  className='icon'src={conta}></img>
            <span>Philistin-Tabitha</span>
          </a></li>
        </ul>
      </div>
      <div>
        </div>
      </div>
      
    </ContatosContainer>
  
  )
}

const ContatosContainer = styled.section`
  width: 100%;
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;


