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

//Asest
import d1 from '../../../../img/blog/dauer.jpeg';
import d2 from './img/img2.jpg';
import d3 from './img/img3.jpg';
import d4 from './img/img4.jpg';
import d5 from './img/img5.jpg';


const valorInicial = [
    {
        titulo: "Right equation",
        parrafo: "You need to analyze the right equation of your commercial and marketing department.",
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
            <TitleSlyder>News</TitleSlyder>
            <ContainerSlyder>
                <Container1>
                    <div>
                        <h2>{valor.titulo}</h2>
                        <p>{valor.parrafo}</p>
                    </div>
                    <ContainerSlyderButton>
                        <ButtonSC onClick={Button1} colorSC={valor.button1}/>
                        <ButtonSC onClick={Button2} colorSC={valor.button2}/>
                        <ButtonSC onClick={Button3} colorSC={valor.button3}/>
                    </ContainerSlyderButton>
                </Container1>
                <Container2>
                    <SlyderSC left={valor.positionX}>

                        <Link to={"/blog/1"}><img src={d1} alt=""/></Link>
                        <Link to={"/blog/2"}><img src={d3} alt=""/></Link>
                        <Link to={"/blog/3"}><img src={d2} alt=""/></Link>
                    </SlyderSC>
                </Container2>
                <Container3>
                    <img src={d1} alt=""/>
                    <SubTitle>Courses</SubTitle>
                </Container3>
                <Container4>
                    <img src={d5} alt=""/>
                    <SubTitle>Awards</SubTitle>
                </Container4>
            </ContainerSlyder>
        </>
    );
}

export default Slyder;