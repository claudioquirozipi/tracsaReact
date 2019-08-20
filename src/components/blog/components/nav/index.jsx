import React from 'react';
import {Link} from 'react-router-dom';
//Styled-Components
import {
    NavContainer
} from './styled';

//Assets
import imgHome from './img/home.svg';

function NavCQ(props) {
    const {bgNav, imgNav, imgAlt, imgUrl, links} = props;
    const myImg = imgNav ? imgNav : imgHome; 
    return(
        <NavContainer bgNav={bgNav}>
            <Link to={imgUrl}>
                <img src={myImg} alt={imgAlt}/>
            </Link>
            <ul>
                {links.map((link, i) => {
                    return(
                        <li key={i}><Link to={link.url}>{link.text}</Link></li>
                    )
                })}
            </ul>
        </NavContainer>
    )
}

export default NavCQ;