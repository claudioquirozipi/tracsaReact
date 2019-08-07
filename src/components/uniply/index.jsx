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

//Asset
import bgImg from '../../img/header/banner-uniply.png';
import logo  from '../../img/header/logoUniply.png';
import img1 from '../../img/uniply/beneficios-uniply-correas-transportadoras-tracsa.png';
import img2 from '../../img/uniply/ficha-tecnica-uniply-correas-transportadoras-tracsa.png';
import img3 from '../../img/uniply/aplicaciones-uniply-correas-transportadoras-tracsa.png';
import img4 from '../../img/uniply/manual-instalacion-uniply-correas-transportadoras-tracsa.png';

function Uniply() {
    return(
        <>
            <Seo 
                title="Correas elevadoras y transportadoras Mínimo estiramiento"
                description="Correas elevadoras y transportadoras de mínimo estiramiento con
                 carcasa de tejido sólido. y de alta resistencia a los impactos."
            />
            <Header2 bgImg={bgImg} logo={logo}/>
            <H1Title>Correas elevadoras y transportadoras Mínimo estiramiento</H1Title>
            <LeftRight src={img1} reverse>
                <IndexText color="#357C39">
                    <h2>BENEFICIOS</h2>
                    <ul>
                        <Li>Mínimo estiramiento.</Li>                    
                        <Li>Carcasa de una pieza de tejidos sólido.</Li>
                        <Li>Alta resistencia a impactos.</Li>
                        <Li>Resistencia a humedad y ácidos.</Li>
                        <Li>Resistencia al desgaste de laterales.</Li>
                        <Li>Línea AARA: Resistencia al fuego.</Li>
                        <Li>Máximo anclaje de bulones.</Li>
                        <Li>Flexibilidad y estabilidad dimensional.</Li>
                        <Li>Bajo coeficiente de fricción.</Li>
                        <Li>Excelentes propiedades de limpieza.</Li>
                        <Li>Reducción de tiempo en empalmes.</Li>
                        <Li>Línea sanitaria fisiológicamente inocua.</Li>
                    </ul>
                </IndexText>
            </LeftRight>

            <LeftRight src={img2}  center>
                <IndexText color="#357C39">
                    <h2>FICHA TÉCNICA</h2>
                    <p>Un resumido detalle de las caracteristicas tecnicas del producto y sus modelos. Para más información pedir las Hojas Técnicas a nuestros Asesores.</p>
                </IndexText>
            </LeftRight>  
            <LeftRight src={img3} >
                <IndexText color="#357C39">
                    <h2>APLICACIONES</h2>
                    <ul>
                        <Li>Agroindustrial.</Li>
                        <Li>Industria maderera.</Li>
                        <Li>Industria alimenticia.</Li>
                        <Li>Industria fruticola.</Li>
                        <Li>Ingenios azucareros.</Li>
                        <Li>Puertos.</Li>
                        <Li>Mineria.</Li>
                        <Li>Construcción.</Li>
                        <Li>Otras.</Li>
                    </ul>
                </IndexText>
            </LeftRight>

            <LeftRight src={img4}  center>
                <IndexText color="#357C39">
                    <h2>Manual de instalación</h2>
                    <p>Te mostramos como instalar y mantener correctamente UNIPLY, para evitar problemas técnicos posteriores.</p>
                </IndexText>
            </LeftRight>  
            <Footer />
        </>
    );
}

export default Uniply;