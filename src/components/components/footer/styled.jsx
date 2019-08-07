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
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            color: white;
            margin: 20px 0;
            font-size: 18px;
            text-align: center;
        }
    }
`;

// *****************Form***************

export const FormSC = styled.form`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 35px;
    border-radius: 8px;
    
    h4 {
        font-size: 20px;
        font-weight: 700;
        color: #293141;
    }
`;

export const InputSC = styled.div`
    border-radius: 4px;
    border: 1px solid #185997;
    margin: 7px 0;
    padding: 5px 10px;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 100%;
    input, textarea {
        border: none;
        outline: none;
        margin-left: 20px;
        color: #7F7F7F;
        width: 100%;
    }
    input:invalid {
        color: #E51D2E;
    }
    img {
        width: 15px;
    }
`;


export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0;
    input, a {
        padding: 7px 40px;
        color: white;
        background:#293141;
        border-radius: 40px;
        border: none;
        outline: none;
        font-weight: 700;
        font-size: 15px;
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