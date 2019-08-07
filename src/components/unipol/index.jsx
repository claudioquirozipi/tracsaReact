import React from 'react';
import MetaTags from 'react-meta-tags';


//Components
import Header2 from '../components/header/header2';
import LeftRight from '../components/leftRight';
import IndexText from '../components/leftRight/indexText';
import Li from '../components/leftRight/li';
import Footer from '../components/footer';
import Seo from '../seo';

//Styled-Components
import {H1Title} from '../components/leftRight/styled';

//Assets
import bgImg from '../../img/header/banner-unipol.png';
import logo from '../../img/header/logoUnipol.png';
import img1 from '../../img/unipol/beneficios-unipol-cangilones-plasticos-tracsa.png';
import img2 from '../../img/unipol/ficha-tecnica-unipol-cangilones-plasticos-tracsa.png';

function Unipol() {
    return(
        <>
            <Seo 
                title="Unipol cangilones de plásticos"
                description="Cangilones plásticos inyectados de polietileno de Alta densidad o Nylon
                con paredes y labio reforzados de bajo peso."
            />
            <Header2 bgImg={bgImg} logo={logo}/>
            <H1Title>Unipol cangilones de plásticos</H1Title>
            <LeftRight src={img1}  reverse>
                <IndexText color="#357C39">
                    <h2>BENEFICIOS</h2>
                    <ul>
                        <Li>Polietileno de alta densidad.</Li>
                        <Li>Paredes y labios reforzados.</Li>
                        <Li>Bajo peso.</Li>
                        <Li>Capacidad de carga y descargas.</Li>
                        <Li>Resistencia a la abrasión e impacto.</Li>
                        <Li>Bajo mantenimiento.</Li>
                        <Li>Máxima vida útil.</Li>
                        <Li>Anticorrosivos.</Li>
                        <Li>No generan chispas.</Li>
                    </ul>
                </IndexText>
            </LeftRight>  

            <LeftRight src={img2}  center>
                <IndexText color="#357C39">
                    <h2>FICHA TÉCNICA</h2>
                    <p>Un resumido detalle de las caracteristicas tecnicas del producto y sus modelos. Para más información pedir las Hojas Técnicas a nuestros Asesores.</p>
                </IndexText>
            </LeftRight>  

            <Footer />
        </>
    );
}

export default Unipol;