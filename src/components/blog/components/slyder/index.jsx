import React, {useState} from 'react';
import {Link} from 'react-router-dom';
//Styled Components
import {
    TitleSlyder,
    ContainerSlyder,
    Container1,
    ContainerSlyderButton,
    ButtonSC,
    Container2,
    SlyderSC,
    Container3,
    Container4,
    SubTitle
} from './styled';
import {H2Title} from '../../../components/cards/styled';
//Asest
import d1 from '../../../../img/blog/10dauer.jpg';
import d2 from './img/img2.jpg';
import d3 from './img/img3.jpg';
import d4 from '../../../../img/blog/11charla.jpg';
import d5 from '../../../../img/blog/12uniply.jpg';


const valorInicial = [
    {
        titulo: "Dauer",
        parrafo: "En Tracsa desarrollamos la correa transportadora y elevadora más resistente del mercado.",
        positionX: "0%",
        button1: true,
        button2: false,
        button3: false
    },
    {
        titulo: "In ShopTalk",
        parrafo: "In ShopTalk, everything is marketing and sales strategies.",
        positionX: "-100%",
        button1: false,
        button2: true,
        button3: false
    },
    {
        titulo: "Firebase Funnels",
        parrafo: "You need to track EVERYTHING. What you don't diagnose you can't make proper decisions.",
        positionX: "-200%",
        button1: false,
        button2: false,
        button3: true
    }
]
function Slyder() {
    const [valor, cambiarValor] = useState(valorInicial[0]);
    function Button1() { cambiarValor(valorInicial[0]) }
    function Button2() { cambiarValor(valorInicial[1]) }
    function Button3() { cambiarValor(valorInicial[2]) }
    return(
        <>
            <H2Title>News</H2Title>
            <ContainerSlyder>
                <Container1>
                    <div>
                        <h2>{valor.titulo}</h2>
                        <p>{valor.parrafo}</p>
                    </div>
                    {/* <ContainerSlyderButton>
                        <ButtonSC onClick={Button1} colorSC={valor.button1}/>
                        <ButtonSC onClick={Button2} colorSC={valor.button2}/>
                        <ButtonSC onClick={Button3} colorSC={valor.button3}/>
                    </ContainerSlyderButton> */}
                </Container1>
                <Container2>
                    <SlyderSC left={valor.positionX}>

                        <Link to={"/blog/1"}><img src={d1} alt=""/></Link>
                        <Link to={"/blog/2"}><img src={d3} alt=""/></Link>
                        <Link to={"/blog/3"}><img src={d2} alt=""/></Link>
                    </SlyderSC>
                </Container2>
                <Container3>
                    <img src={d4} alt=""/>
                    <SubTitle>Capacitaciones</SubTitle>
                </Container3>
                <Container4>
                    <img src={d5} alt=""/>
                    <SubTitle>Lanzamientos</SubTitle>
                </Container4>
            </ContainerSlyder>
        </>
    );
}

export default Slyder;