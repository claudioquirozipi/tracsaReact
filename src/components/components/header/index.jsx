import React from 'react';
import {Link} from 'react-router-dom';
//Styled-Components
import {
    HeaderSC,
    Nav,
    TitleIma,
    TitleHeader,
    Clientes
} from './styled';

//Assest
import bgCliente from '../../../img/header/header__clientes.png';
import logo from '../../../img/header/header__logo.png';

function Header() {
    return(
        <HeaderSC>
            <Nav>
                <img src={logo} alt=""/>
                <ul>
                <li><a href="https://tracbras.com.br/"></a></li>
                    <li><Link to="/"></Link></li>
                </ul>
            </Nav>
            <TitleIma><img src={logo} alt=""/></TitleIma>
            <TitleHeader><span>MÁS DE 4.000</span><br/>CLIENTES NOS AVALAN</TitleHeader>

            <Clientes src={bgCliente}/>
        </HeaderSC>
    );
}

export default Header;