import React from 'react';
import {Link} from 'react-router-dom';


//Componenst
import Header from './components/header';
import Footer from './components/footer';
import LeftRight from './components/leftRight';
import IndexText from './components/leftRight/indexText';
import Li from './components/leftRight/li';
import Cards from './components/cards';
import Seo from './seo';

//Styled-Components
import {H1Title} from './components/leftRight/styled';
import {
    IndexTextBlue,
    BgContainer
} from './styled.jsx';

//Assest
import IndexImg1 from '../img/index/ureply-tracsa-revestimiento-poliuretano.png';
import IndexImg2 from '../img/index/uniply-correas-transportadoras-tracsa.png';
import IndexImg3 from '../img/index/unipol-cangilones-plasticos-tracsa.png';
import IndexImg4 from '../img/index/serply-servicio-tecnico-asesoria-tracsa.png';
import IndexImg5 from '../img/index/velta-correa-goma-transportadora-tracsa.png';
import IndexImg6 from '../img/index/dauer-correas-transportadoras-alto-rendimiento-tracsa.png';
import IndexImg7 from '../img/index/tracsa-lider-mercado-agroindustrial-img1.png';
import logo1 from '../img/index/index__logo1.png';
import logo2 from '../img/index/index__logo2.png';
import logo3 from '../img/index/index__logo3.jpg';
import logo4 from '../img/index/index__logo4.png';
import logo5 from '../img/index/index__logo5.png';
import logo6 from '../img/index/index__logo6.png';


function Index() {
    return(
        <>
            <Seo 
                title="Tracsa fabricación de correas elevadoras revestimientos de poliuretano."
                description="Desde 1989 fabricando correas elevadoras y revestimientos de poliuretano, exportando sus productos a los principales países del mundo."
                keywords={true}
            />
            
            <Header type="Index"/>
            <H1Title>Tracsa fabricación de correas elevadoras revestimientos de poliuretano</H1Title>

            <LeftRight src={IndexImg1} reverse >
                <IndexText color="#357C39" grey>
                    <img src={logo1} alt=""/>
                    <h2>Revestimientos anti-abrasivos de poliuretano</h2>
                    <ul>
                        <Li>Resistencia a la abrasión e impacto.</Li>
                        <Li> Una sola pieza sin fijaciones ni uniones.</Li>
                        <Li> Rapida y sencilla instalación.</Li>
                        <Li> Bajo peso.</Li>
                        <Li> Faja roja indicativa de desgaste.</Li>
                    </ul>
                    <div>
                        <Link
                            to="./revestimiento-puliuretano/ureply"
                        >Ampliar</Link>
                    </div>
                </IndexText>
            </LeftRight>

            <LeftRight src={IndexImg2} >
                <IndexText color="#185997" grey>
                    <img src={logo2} alt=""/>
                    <h2>Correas elevadoras y transportadoras.</h2>
                    <ul>
                        <Li>Mínimo estiramiento.</Li>
                        <Li>Carcasa de tejido sólido.</Li>
                        <Li>Alta resistencia a los impactos.</Li>
                        <Li>Máximo anclaje de bulones.</Li>
                        <Li>Flexibilidad y estabilidad dimensional.</Li>
                    </ul>
                    <div>
                        <Link
                            to="./correas-transportadoras/uniply"
                        >Ampliar</Link>
                    </div>
                </IndexText>
            </LeftRight>

            <LeftRight src={IndexImg3} reverse>
                <IndexText color="#E4B73B" grey>
                    <img src={logo3} alt=""/>
                    <h2>Cangilones plásticos inyectados</h2>
                    <ul>
                        <Li>Polietileno de Alta densidad o Nylon.</Li>
                        <Li>Paredes y Labio reforzados.</Li>
                        <Li>Bajo peso.</Li>
                        <Li>Máxima capacidad de carga y descarga.</Li>
                        <Li>Exelente resistencia a impactos.</Li>
                    </ul>
                    <div>
                        <Link
                            to="./cangilones-plasticos/unipol"
                        >Ampliar</Link>
                    </div>
                </IndexText>
            </LeftRight>

            <LeftRight src={IndexImg4} >
                 <IndexText color="#B4632C" grey>
                     <img src={logo4} alt=""/>
                    <h2>Servicios Técnicos y Asesoramiento.</h2>
                    <p>El procedimiento que utilizamos se adecua a la tecnología de fabricación de nuestras correas. El mismo es realizado con prensas de última generación con controles precisos de temperatura y presión.</p>
                    <div>
                        <Link
                            to="./asesoria-tecnica/serply"
                        >Ampliar</Link>
                    </div>
                </IndexText>
            </LeftRight>

            <LeftRight src={IndexImg5} reverse>
                <IndexText color="#293141" grey>
                    <img src={logo5} alt=""/>
                    <h2>Correa de goma, transportadoras y elevadoras.</h2>
                    <ul>
                        <Li>Bajo estiramiento y alta estabilidad.</Li>
                        <Li>Excelente anclaje y alta resistencia.</Li>
                        <Li>Excelente absorción de impactos.</Li>
                        <Li>Resistencia a la modificación mecánica.</Li>
                        <Li>Bajo costo operacional.</Li>
                    </ul>
                    <div>
                        <Link
                            to="./correas-transportadoras/velta"
                        >Ampliar</Link>
                    </div>
                </IndexText>
            </LeftRight>

            <LeftRight src={IndexImg6} >
                <IndexText color="#357C39" grey>
                    <img src={logo6} alt=""/>
                    <h2>Correas de alto rendimiento.</h2>
                    <ul>
                        <Li>Extrema resistencia al desgaste.</Li>
                        <Li>Resistente a grasas y aceites.</Li>
                        <Li>Ignífuga y antiestática.</Li>
                        <Li>Bajo estiramiento.</Li>
                        <Li>Reducción de tiempos de empalmes.</Li>
                        <Li>Durabilidad 3 veces superior.</Li>
                    </ul>
                    <div>
                        <Link
                            to="./correas-transportadoras/dauer"
                        >Ampliar</Link>
                    </div>
                </IndexText>
            </LeftRight>
            <BgContainer>
                <LeftRight src={IndexImg7} reverse>
                    <IndexTextBlue >
                        <h2>Compañia líder en el mercado agroindustrial</h2>
                        <p>Desde 1989 fabricando correas elevadoras y revestimientos de poliuretano, exportando sus productos a los principales países del mundo. Con su planta principal de 30.000 m2 en Argentina y sede en Brasil y en EEUU. Contando con una tecnología de vanguardia, un equipo de excelencia y motorizados bajo normas de calidad internacionales nos </p>
                    </IndexTextBlue>
                </LeftRight>
            </BgContainer>

            <Cards/>
            <Footer />
        </>
    );
}

export default Index;