import React from 'react';
import '../About/About.css';

function About() {
  return (
    <>
      <div className='home-about'>
        <div className='container-resumo-fotos'>
          <div className='div-imagem'>
            <img
              className='imgem-home'
              src='../../public/img/about-bg1.png'
              alt='about'
            />
          </div>
          <div className='div-resumo'>
            <h2>Sobre nós - Fofinhos Pet Shop</h2>
            <p>
              Fundada em 2022, a Fofinhos Pet Shop se dedica pela qualidade e
              variedades de produtos e serviços voltados aos animais. Entre eles
              oferecemos tratamentos completos para cães e gatos. Em nosso
              espaço o cliente encontra tudo o que precisa para seu animal, como
              brinquedos, acessórios e alimentação.
            </p>
            O projeto foi desenvolvido por 5 estudantes de diferentes
            nacionalidades, tais como: Angola, Haiti e Venezuela. Projeto final
            do curso de desvenvolvedor Full Stack na Toti. Onde cada grupo
            elaborou seu próprio projeto, incluindo design e conteúdo. No
            projeto apresentado aqui, foi utilizado conhecimentos em linguagem
            de programação.
            <p />
            <br />
            <button className='btn-about'>Saiba Mais</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
