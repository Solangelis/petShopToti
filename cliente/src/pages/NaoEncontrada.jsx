import styled from "styled-components"

export default function NaoEncontrada() {
  return (
    <NaoEncontradaContainer><h1>Página Nao Encontrada</h1></NaoEncontradaContainer>
  )
}

const NaoEncontradaContainer = styled.section`
  width:100%;
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
