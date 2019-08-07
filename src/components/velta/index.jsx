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
import bgImg from '../../img/header/banner-velta.png';
import logo from '../../img/header/logoVelta.png';
import img1 from '../../img/velta/beneficios-velta-correa-goma-transportadora-tracsa.png';
import img2 from '../../img/velta/ficha-tecnica-velta-correa-goma-transportadora-tracsa.png';
import img3 from '../../img/velta/aplicaciones-velta-correa-goma-transportadora-tracsa.png';

function Velta() {
    return(
        <>
            <Seo 
                title="Velta correa transportadora."
                description="Correa de goma, transportadoras y elevadoras de bajo estiramiento y
                alta estabilidad con excelente anclaje y alta resistencia."
            />
            <Header2 bgImg={bgImg} logo={logo}/>
            <H1Title>Velta correa transportadora</H1Title>
            <LeftRight src={img1} reverse >
                <IndexText color="#357C39">
                    <h2>BENEFICIOS</h2>
                    <ul>
                        <Li>Adhesión entre capa de unión y lonas.</Li>
                        <Li>Bajo estiramiento y alta estabilidad.</Li>
                        <Li>Excelente flexibilidad y resistencia.</Li>
                        <Li>Capacidad de absorción de impactos.</Li>
                        <Li>Resistencia a modificación mecánica.</Li>
                        <Li>Bajo costo operacional.</Li>
                        <Li>Alta resistencia al empalme mecánico.</Li>
                        <Li>Excelente adhesión.</Li>
                    </ul>
                </IndexText>
            </LeftRight>  
            <LeftRight src={img2} center >
                <IndexText color="#357C39">
                    <h2>FICHA TÉCNICA</h2>
                    <p>Un resumido detalle de las caracteristicas tecnicas del producto y sus modelos. Para más información pedir las Hojas Técnicas a nuestros Asesores.</p>
                </IndexText>
            </LeftRight>  
            <LeftRight src={img3}>
                <IndexText color="#357C39">
                    <h2>APLICACIONES</h2>
                    <ul>
                        <Li>Puertos.</Li>
                        <Li>Mineria.</Li>
                        <Li>Construcción.</Li>
                        <Li>Agroindustrial.</Li>
                        <Li>Industria aceitera.</Li>
                        <Li>Industria maderera.</Li>
                        <Li>Industria alimenticia.</Li>
                        <Li>Industria frutícola.</Li>
                        <Li>Ingenios azucareros.</Li>
                        <Li>Otras.</Li>
                    </ul>
                </IndexText>
            </LeftRight>  
            <Footer />
        </>
    );
}

export default Velta;