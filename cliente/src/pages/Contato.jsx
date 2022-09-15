import styled from "styled-components";

export default function Contato() {
  return (
    <ContatosContainer><h1>Nossa página de Contato</h1></ContatosContainer>
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
