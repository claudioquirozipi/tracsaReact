import React from 'react';
import {Link} from 'react-router-dom';



//Styled-Componets
import {
    Header2SC
} from './styled';

function Header2(props) {
    const {bgImg, logo} = props;
    return(
        <Header2SC bgImg={bgImg}>
            <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                </svg>
            </Link>
            <img src={logo} alt=""/>
        </Header2SC>
    );
}

export default Header2;