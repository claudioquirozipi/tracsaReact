import styled from 'styled-components';

export const ContainerForm = styled.div`
    background: #293141;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 50px 0;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #979797;
        border-radius: 8px;
        padding: 20px 20px;
        width: 375px;
        h1 {
            text-align: center;
            color: white;
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
        color: #185997;
        border: 2px solid #185997;
        padding: 15px 45px;
        border-radius: 40px;
        font-size: 20px;
        font-weight: 700;
        text-decoration: none;
        margin: 15px 0 ;
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
        font-weight: 700;
        color: #185997;
    }
    div {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        label {    
                display: flex;
                justify-content: center;
                align-items: center;
            div {
                margin: 0 20px 0 0 ;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                box-shadow: inset 0 0 0 4px white;
                border: 1px solid #979797;
            }
            p {margin: 0;}
        }
        input:focus + label > div {
            background: #357C39;
        }
        input { 
            opacity: 0;
            z-index: -10;
         }
    }
`;
export const InputButton = styled.a`
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
        border-bottom: 2px solid #979797;
        label {
            margin: 10px 0;
        }
        input {
            margin-bottom: 10px;
            border: none;
            outline: none;

        }
        input::-webkit-input-placeholder { color: #979797; } 
        input:-moz-placeholder { /* Firefox 18- */ color: #979797; } 
        input::-moz-placeholder { /* Firefox 19+ */ color: #979797; } 
        input:-ms-input-placeholder { color: #979797; }
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
    font-weight: 700;
    font-size: 20px;
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
    h3 {
        color: #979797;
    }
    img {
        width: 50%;
        height: auto;
    }
    article {
        width: 100%;
        /* box-sizing: border-box; */
        & > h3 { text-align: left;}
        p {
            font-weight: 700;
            font-size: 20px;

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