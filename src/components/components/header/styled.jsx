import styled from 'styled-components';
import {MQ, Colors} from '../../../config/media';

import bgHeader from '../../../img/header/header__fondo.png';
import bgBra from '../../../img/header/header__BRA.jpg';
import bgArg from '../../../img/header/header__ARG.png';

export const HeaderSC = styled.div`
    height: 90vh;
	background-image: url(${bgHeader});
	background-size: cover;
	background-position: center bottom;
	background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    @media ${MQ.md} {
        margin-bottom: 250px;
    }
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 0px 5%;
    & > img {
        height: 40px;
        width: auto;
        opacity: 0;
        @media ${MQ.md} {
            height: 46px;
            opacity: 1;
        }
    }
    ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        li {
            list-style: none;
            margin-left: 15px;
            a {
                list-style: none;
                display: block; 
                width: 40px;
    		    height: 28px;
                border-radius: 3px;
            }
        }
        & :nth-child(1) a {
            background-image: url(${bgBra});
			background-size: 100% 100%;
			background-repeat: no-repeat;
			background-position: top right;
        }
        & :nth-child(2) a {
            background-image: url(${bgArg});
			background-size: 100% 100%;
			background-repeat: no-repeat;
			background-position: top right;
        }
    }
`;

export const TitleIma = styled.div`
    display: flex;
    justify-content: center;
    img {
        width: 70%;
    }
    @media ${MQ.md} {
        display: none;
    }
`;
export const TitleHeader = styled.h3`
    text-align: center;
    color: ${Colors.white};
    font-size: 20px;
    filter: drop-shadow(3px 3px 3px rgba(110,110,110,0.9)); 
    display: none;
    @media ${MQ.md} {
        grid-area: 4/2/6/12;
        font-size: 45px;
        display: inline;
        margin: 0;
        transform: translateY(-20px);
    }
    span {
        font-size: 34px;
        color: ${Colors.white};
        @media ${MQ.md} {
            font-size: 76px;
            display: block;
            transform: translateY(45px);
        }
    }
`;

export const Clientes = styled.img`
    width: 100%;
    opacity: 0;
    @media ${MQ.md} {
        opacity: 1;
        transform: translateY(20%);
    }
`;


//*************Header 2************
export const Header2SC = styled.div`
    height: 100vh;
    position: relative;
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: center bottom;
    a {
        background: white;
        border-radius: 50%;
        width: 54px;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 30px;
        left: 50px;
        position: absolute;
        svg {
            width: 50px;
            height: 50px;
        }
    }
    img {
        position: absolute;
        bottom: 0;
        left: 50%;
        height: 115px;
        transform: translate(-50%,0%);
    }
`;
