import styled from 'styled-components';
import {MQ} from '../../config/media';

export const ContainerForm = styled.div`
    background: #f1f2f6;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 50px 0;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: transparent;
        border-radius: 8px;
        padding: 20px 20px;
        width: 375px;
        @media ${MQ.md} {
            width: 700px;
        }
        h1 {
            text-align: center;
            color: #261D57;
            font-size: 26px;
            font-weight: 700;
        }
    }
`;

export const InputVerEvento = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    img {
        width: 100%;
    }
    a {
        color: #261D57;
        border: 3px solid #45D9D5;
        padding: 20px 85px;
        border-radius: 40px;
        font-size: 16px;
        font-weight: 700;
        text-decoration: none;
        margin: 20px 0 ;
    }
`;

export const InputRadio = styled.div`
    background: white;
    width: 100%;
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    h2 {
        font-weight: 500;
        color: #C4C2CD;
        font-size: 16px;
    }
    div {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        label {    
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 8px;
            div {
                margin: 0 20px 0 0 ;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                box-shadow: inset 0 0 0 4px white;
                border: 3px solid #dbdbdb;
            }
            p {
                margin: 0;
                color: #261D57;
                font-size: 30px;
                font-weight: 700;
            }
        }
        input:focus + label > div {
            background: #FF4DCB;
        }
        input { 
            opacity: 0;
            z-index: -10;
            position: fixed;
         }
    }
`;
export const InputButton = styled.input.attrs({type:"submit", value: "Recibir Entrada"})`
    background: #185997;
    color: white;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 8px;
    font-weight: 700;
    font-size: 20px;
    margin: 0 0 15px;
    border: none;
    outline: none;
`;

export const ContainerInputs = styled.div`
    width: 100%;
    border-radius: 8px;
    background: white;
    box-sizing: border-box;
    margin-bottom: 15px;
    div {
        display: flex;
        flex-direction: column;
        padding: 0 40px;
        border-bottom: 2px solid #F8F9FD;
        label {
            margin: 10px 0;
            color: #261D57;
            font-size: 16px;
            font-weight: 500;
        }
        input {
            margin-bottom: 10px;
            border: none;
            outline: none;
            color: #261D57;
            font-size: 20px;
            font-weight: 500;
        }
        input::-webkit-input-placeholder { color: #C4C2CD; } 
        input:-moz-placeholder { /* Firefox 18- */ color: #C4C2CD; } 
        input::-moz-placeholder { /* Firefox 19+ */ color: #C4C2CD; } 
        input:-ms-input-placeholder { color: #C4C2CD; }
    }
    & :nth-child(3) {border: none;}
`;

export const Message = styled.p`
    background: white;
    border-radius: 8px;
    text-align: center;
    width: 100%;
    padding: 20px 0;
    margin: 0 0 15px;
    font-weight: 500;
    font-size: 20px;
    color: #261D57;
    font-size: 18px;

`;

export const ContainerQR = styled.div`
    background: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 50px 40px;
    box-sizing: border-box;
    h2, h3 {
        text-align: center;
    }
    h2 {
        color: #261D57;
        font-weight: 700;
        font-size: 26px;
    }
    h3 {
        color: #6D8492;
        font-weight: 500;
        font-size: 16px;
    }
    img {
        width: 244px;
        height: auto;
    }
    article {
        width: 100%;
        /* box-sizing: border-box; */
        & > h3 { text-align: left;}
        p {
            font-weight: 500;
            font-size: 20px;
            color: #261D57;

        }
    }
`;

export const ClouseSC = styled.div`
    display: flex; 
    justify-content: flex-end;
    width: 100%;
    img {
        width: 15px;
        height: 15px;
    }
`;
export const View1 = styled.div`
    width: 100%;
    display: ${props => props.visible==="true" ? "block": "none"};
`;


export const View2 = styled.div`
    width: 100%;
    display: ${props => props.visible==="true" ? "block": "none"};
`;

export const View3 = styled.div`
    width: 100%;
    display: ${props => props.visible==="true" ? "block": "none"};
`;