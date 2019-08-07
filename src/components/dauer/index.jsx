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
import bgImg from '../../img/header/banner-dauer.png';
import logo from '../../img/header/logoDauer.png';
import img1 from '../../img/dauer/beneficios-Dauer-correas-transportadoras-alto-rendimiento-tracsa.png';
import img2 from '../../img/dauer/ficha-tecnica-Dauer-correas-transportadoras-alto-rendimiento-tracsa.png';
import img3 from '../../img/dauer/aplicaciones-Dauer-correas-transportadoras-alto-rendimiento-tracsa.png';

function Daver() {
    return(
        <>
            <Seo 
                title="Dauer correas transportadoras."
                description="Correas de alto rendimiento con extrema resistencia al desgaste.
                Resistente a grasas y aceites. Ignífuga y antiestática."
            />
            <Header2 bgImg={bgImg} logo={logo}/>
            <H1Title>Dauer correas transportadoras</H1Title>
            <LeftRight src={img1} reverse >
                <IndexText color="#357C39">
                    <h2>BENEFICIOS</h2>
                    <ul>
                        <Li>Es una correa de poliuretano.</Li>
                        <Li>Extrema resitencia al desgaste.</Li>
                        <Li>Resistente a grasas y aceites.</Li>
                        <Li>Ignífuga y antiestática.</Li>
                        <Li>Bajo estiramiento.</Li>
                        <Li>Reducción de tiempo en empalmes.</Li>
                        <Li>Durabilidad 3 veces superior al caucho.</Li>
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
                        <Li>Agroindustria.</Li>
                        <Li>Industria aceitera.</Li>
                        <Li>Industria maderera.</Li>
                        <Li>Industria alimenticia.</Li>
                        <Li>Industria fruticola.</Li>
                        <Li>Ingenios azucareros.</Li>
                        <Li>Otras.</Li>
                    </ul>
                </IndexText>
            </LeftRight>  
            <Footer />
        </>
    );
}

export default Daver;