import styled, {css} from 'styled-components';
import {MQ} from '../../../config/media';

export const H1Title = styled.h1`
    color: #585858;
    margin: 100px 0;
    text-align: center;
    width: 100%;
    font-weight: 900;
    font-size: 1.6em;
    padding: 0 8.3vw;
    box-sizing: border-box;
    @media ${MQ.md} {
        font-size: 2em;
    }
`;

export const LeftRightSC = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 8.3% 50px;
    @media ${MQ.md} {
        flex-direction: row;
        margin: 0 8.3% 150px;
    }
    ${props => props.reverse && css`
        @media ${MQ.md} {
            flex-direction: row-reverse;
        }
    `}
    ${props => props.center && css`
        flex-direction: column-reverse;
        @media ${MQ.md}{
            flex-direction: column-reverse;
        }
        div {
            
            width: 100%;
            
        }
    `}
`;

export const ContainerImg = styled.div`
    width: 100%;
    margin-bottom: 30px;
    @media ${MQ.md}{
        width: 50%;
        margin-bottom: 0;
    }
    img {
        width: 100%;
    }
`;
export const ContainerText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${MQ.md} {
        width: 40%;
    }
`;


export const IndexTextSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${MQ.md} {
        align-items: flex-start;
    }
    & > img {
        height: auto;
        width: 60%;       
        margin: 0px 0 30px; 
    }
    h2 {
        font-size: 20px;
        text-align: center;
        margin: 0 0 17.5px;
        color: ${props => props.color || "#585858"};
        color: ${props => props.grey ? "#585858" : props.color};
        @media ${MQ.md} {
            font-size: 25px;
            text-align: left;
        }
    }
    li {
        font-size: .8em;
        list-style: none;
        color: #7F7F7F;
        font-weight: 700;
        position: relative;
        line-height: 2em;
        margin: 15px 0;
        @media ${MQ.md}{
            margin: 30px 0;
            font-size: 1.1em;
        }
        svg {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(-155%, -50%);
            path {
                fill: ${props => props.color || "#357C39"};
            }
        }
    }
    p {
        color: #979797;
        font-size: 1em;
        line-height: 25px;
        font-weight: 700;
        @media ${MQ.md} {
            font-size: 20px;
            line-height: 40px;
        }
    }
    div {
        display: flex;
        justify-content: center;
        a {
            border: none;
            outline: none;
            border-radius: 50px;
            color: white;
            text-decoration: none;
            background: ${props => props.color || "#357C39"};
            width: 200px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            margin-top: 25px;
        }
    }
`;