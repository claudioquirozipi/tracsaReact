import styled, {css} from 'styled-components';
import {MQ} from '../../../config/media';

export const FooterContainer = styled.div`
    background: #293141;
    padding: 70px 5% ;
`;

export const ContainerFormText = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    @media ${MQ.md} {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        & > div {
            margin-right: 5vw;
        }
    }
`;
export const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    & > div > img {
        width: 50px;
        height: 50px;
        padding: 30px;
        border: 3px solid white;
        border-radius: 50%;
    }
    h4 {
        color: white;
        font-size: 40px;
        font-weight: 700;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            color: white;
            margin: 20px 0;
            font-size: 25px;
            font-weight: 700;
            text-align: center;
            /* position: relative; */
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
                height: 30px;
                /* position: absolute;
                top: 3px;
                left: -35px; */
                margin-right: 15px;
            }
            span {
                font-weight: 400;
            }
        }
    }
`;

// *****************Form***************

export const FormSC = styled.form`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 70px;
    border-radius: 8px;
    width: calc(422px - 140px);
    h4 {
        font-size: 25px;
        font-weight: 800;
        color: #2F3640;
        margin-top: 47.5px;
        margin-bottom: 13.5px;
    }
    p {
        color: #666666;
        font-size: 8px;
        margin-top: 0;
        margin-bottom: 29px;
        line-height: 22.5px;
    }
`;

export const InputSC = styled.div`
    border-radius: 4px;
    border: 2px solid #E6E6E6;
    margin: 0;
    margin-bottom: 10px;
    padding: 0px 14.5px;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 35px;
    input, textarea {
        border: none;
        outline: none;
        margin-left: 11.5px;
        color: #B3B3B3;
        width: 100%;
        font-size: 12px;
    }
    input:invalid {
        color: #E51D2E;
    }
    img {
        width: 12px;
    }
`;


export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0;
    input, a {
        width: 160px;
        height: 30px;
        color: white;
        background:#293141;
        border-radius: 4px;
        border: none;
        outline: none;
        font-weight: 600;
        font-size: 12px;
        cursor: pointer;
    }
    a {
        color: #293141;
        background: white;
        text-decoration: none;
    }
    ${props => props.simple && css`
            margin: 0;
            a {
                padding: 5px;
                background: transparent;
                color: white;
            }
    `}
`;