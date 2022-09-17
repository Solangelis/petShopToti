import React from 'react';
import about from '../images/about.png';
import './About.css';


function About() {


    return (
        <main>
            <div className='home-about'>
                <h1 id='title'>Sobre nós - Fofinhos Pet Shop</h1>
                <div className='container-resumo-fotos'>
                    <div className='div-imagem'>
                    </div>
                    <img className='imgem-home' src={about}  alt='about'/>
                    <div className='div-resumo'>
                        <p>Fundada em 2022, a Fofinhos Pet Shop se dedica pela qualidade e variedades de produtos e serviços voltados aos animais. Entre eles oferecemos tratamentos completos para cães e gatos
                    Em nosso espaço o cliente encontra tudo o que precisa para seu animal, como brinquedos, acessórios e alimentação. </p>
                    O projeto foi desenvolvido por 5 estudantes de diferentes nacionalidades, tais como: Angola, Haiti, Venezuela.
                    Projeto final  do curso de desvenvolvedor Full Stack  na Toti. Onde cada grupo elaborou seu próprio projeto, incluindo design e conteúdo. No projeto apresentado aqui, foi utilizado conhecimentos em linguagem de programação.
                    <p/>
                    <button className='btn-about'>Saiba Mais</button>
                    </div>
                </div>
                
            </div>
        </main>
    )
}



export default About;