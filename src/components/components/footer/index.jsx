import React from 'react';
import {Link} from 'react-router-dom';
 
//Components
import Form from './form';

//Styled-Components
import {
    FooterContainer,
    ContainerFormText,
    Information,
    ContainerButton
} from './styled';

//Assest
import IconGroup from '../../../img/footer/group.svg';

function Footer() {
    return(
        <FooterContainer>
            <ContainerFormText>
                <Information>
                    <ContainerButton>
                        <img src={IconGroup} alt="icon"/>
                    </ContainerButton>
                    <ul>
                        <li>Teléfono: (54-341) 456-2580</li>
                        <li>Whatsapp: (+54) 9 341 519 2019</li>
                        <li>Soporte: info@tracsa.com.ar</li>
                        <li>Ventas: ventas@tracsa.com.ar</li>
                        <li>Av. Circunvalación 3900 <br/>Rosario. Santa Fe. C.P. S-2010-IQA</li>
                    </ul>
                    <ContainerButton>
                        <Link to="/blog">blog</Link>
                    </ContainerButton>
                    <ContainerButton simple>
                        <Link to="/form" >Ver evento</Link>
                    </ContainerButton>
                </Information>
                <Form />
            </ContainerFormText>
        </FooterContainer>
    );
}

export default Footer;