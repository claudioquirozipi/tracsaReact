import React from 'react';

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
import bgImg from '../../img/header/banner-ureply.png';
import logo from '../../img/header/logoUreply.png';
import img1 from '../../img/ureply/ureply-tracsa-revestimiento-poliuretano-img1.png';
import img2 from '../../img/ureply/ureply-tracsa-revestimiento-poliuretano-img2.png';
import img3 from '../../img/ureply/ureply-tracsa-revestimiento-poliuretano-img3.png';
import img4 from '../../img/ureply/ficha-tecnica-ureply-tracsa-revestimiento-poliuretano-img.png';
import img5 from '../../img/ureply/instalacion-ureply-tracsa-revestimiento-poliuretano-img.png';


function Ureply() {
    return(
        <>
            < Seo 
                title="Revestimientos anti abrasivos de poliuretano"
                description="Revestimientos anti-abrasivos de poliuretano con  Resistencia a la 
                abrasión e impacto. De una sola pieza sin fijaciones ni uniones."
            />
            <Header2 bgImg={bgImg} logo={logo}/>
            <H1Title>Revestimientos anti abrasivos de poliuretano</H1Title>
            <LeftRight src={img1} alt="ureply-tracsa-revestimiento-poliuretano-img1">
                <IndexText color="#357C39">
                    <h2>BENEFICIOS</h2>
                    <ul>
                        <Li> Resistencia a la abrasión e impacto.</Li>
                        <Li> Una solapieza sin fijaciones ni uniones.</Li>
                        <Li>Rápida y sencilla instalación.</Li>
                        <Li>Bajo peso.</Li>
                        <Li>Alta duración.</Li>
                        <Li>Atóxico.</Li>
                        <Li>Reducción de costos de mantenimiento.</Li>
                        <Li>Disminucion de riesgos de accidentes.</Li>
                        <Li>Mayor produtividad y eficiencia.</Li>
                        <Li>Posible de instalar sin bajar los caños.</Li>
                        <Li>Faja roja indicativa para reemplazo.</Li>
                    </ul>
                    
                </IndexText>
            </LeftRight>

            <LeftRight  src={img2} center alt="ureply-tracsa-revestimiento-poliuretano-img2">
                <IndexText color="#357C39">
                    <h2>Comparativo</h2>
                    <p>Comparamos y costeamos los tres ecenarios más frecuentes al momento de optimizar el uso de los canos en la planta. Aprovechando sus 3 giros, revistiendolo nuevo, revistiendolo usado.</p>
                    
                </IndexText>
            </LeftRight>

            <LeftRight src={img3} alt="ureply-tracsa-revestimiento-poliuretano-img3">
                <IndexText color="#357C39">
                    <h2>APLICACIONES</h2>
                    <ul>
                        <Li>Terminales portuarias.</Li>
                        <Li>Aceiteras.</Li>
                        <Li>Plantas de acopio.</Li>
                        <Li>Industria minera, etc.</Li>
                        <Li>Caños redondos y cuadrados.</Li>
                        <Li>Cabezales de elevadores.</Li>
                        <Li>Distribuidores y tolvas.</Li>
                        <Li>Válvulas amortiguadoras y codos.</Li>
                        <Li>Secadoras.</Li>
                        <Li>Pescantes de descarga portuarios.</Li>
                    </ul>
                </IndexText>
            </LeftRight>

            <LeftRight src={img4} center alt="ficha-tecnica-ureply-tracsa-revestimiento-poliuretano-img">
                <IndexText color="#357C39">
                    <h2>FICHA TÉCNICA</h2>
                    <p>Un resumido detalle de las caracteristicas tecnicas del producto y sus modelos. Para más información pedir las Hojas Técnicas a nuestros Asesores.</p>        
                </IndexText>
            </LeftRight>

            <LeftRight src={img5}  center alt="instalacion-ureply-tracsa-revestimiento-poliuretano-img">
                <IndexText color="#357C39">
                    <h2>INSTALACIÓN</h2>
                    <p>Te mostramos como instalar correctamente UREPLY MAX, para evitar problemas técnicos posteriores.</p>
                </IndexText>
            </LeftRight>       
            <Footer />     
        </>
    );
}

export default Ureply;