import React from 'react';

//Components
import Header2 from '../components/header/header2';
import LeftRight from '../components/leftRight';
import IndexText from '../components/leftRight/indexText';
import Footer from '../components/footer';
import Seo from '../seo';

//Styled-Components
import {H1Title} from '../components/leftRight/styled';

//Assets 
import bgImg from '../../img/header/banner-serply.png';
import logo from '../../img/header/logoSerply.png';
import img1 from '../../img/serply/empalmes-serply-servicio-tecnico-asesoria-tracsa.png';
import img2 from '../../img/serply/engomados-poleas-serply-servicio-tecnico-asesoria-tracsa.png';
import img3 from '../../img/serply/perforados-correas-serply-servicio-tecnico-asesoria-tracsa.png';
import img4 from '../../img/serply/broches-cintas-transportadoras-serply-servicio-tecnico-asesoria-tracsa.png';

function Serply() {
    return(
        <>
            <Seo 
                title="Asesoría técnica serply."
                description="Servicios Técnicos y Asesoramiento. El procedimiento que utilizamos se 
                adecua a la tecnología de fabricación de nuestras correas.  
                El mismo es realizado con prensas de última generación con 
                controles precisos de temperatura y presión."
            />
            <Header2 bgImg={bgImg} logo={logo}/>
            <H1Title>Asesoría técnica serply</H1Title>
            <LeftRight src={img1}  reverse alt={"empalmes-serply-servicio-tecnico-asesoria-tracsa"}>
                <IndexText color="#357C39">
                    <h2>EMPALMES</h2>
                    <p>Realizamosempalmes de cintas transportadoras en campo y en nustras instalaciones. El procedimiento que utilizamos se adecua a la tecnologuía de fabricación de nuestras correas. El mismo es realizado con prensas de última generación con controles precisos de temperaturay presión. Se utiliza el sistema de "Doble zeta" con aporte de PVC y PU, con lo cual se logra una unión flexible y de extrema durabilidad. Otras de sus principales caracteristicas, es el hecho de poder comenzar a tilizar la correa empleada inmediatamente después de terminado el procedimiento, logrando unahorro sustancial de tiempo.</p>
                </IndexText>
            </LeftRight>  

            <LeftRight src={img2} alt={"engomados-poleas-serply-servicio-tecnico-asesoria-tracsa"} >
                <IndexText color="#357C39">
                    <h2>ENGOMADOS DE POLEAS</h2>
                    <p>Cubrimos las más amplias exigencias del mercado, aportando mayor eficiencia en el funcionamiento de los equipamiento. Trabajamos con cauchos vulcanizados en autoclave, de diferentes características, espesores y acabados superficiales, adaptándonos a las necesidades de nuestros.</p>
                </IndexText>
            </LeftRight>  

            <LeftRight src={img3}  reverse alt={"perforados-correas-serply-servicio-tecnico-asesoria-tracsa"}>
                <IndexText color="#357C39">
                    <h2>PERFORADO DE CORREAS</h2>
                    <p>La automatización del mismo nos permite brindar una seguridad de realización, logrando a su vez mayor precisión y rapidez de servicio.</p>
                </IndexText>
            </LeftRight>  

            <LeftRight src={img4} alt={"broches-cintas-transportadoras-serply-servicio-tecnico-asesoria-tracsa"} >
                <IndexText color="#357C39">
                    <h2>OTROS PRODUCTOS COMERCIALIZADOS</h2>
                    <p>Broches para unión de cintas transpotadoras. Bulones de correas convencionales y revestidos. Cangilones metálicos estampados. pegado de guía y perfiles.</p>
                </IndexText>
            </LeftRight>  
            <Footer />
        </>
    );
}

export default Serply;