import styled from 'styled-components';
import {MQ} from '../../../../config/media';

export const TitleSlyder = styled.h2`
    margin: 100px 0 0px;
    text-align: center;
    color: #2C3E50;
    font-weight: 700;
    font-size: 35px;
    @media ${MQ.md} {
        font-size: 40px;
    }
`;

export const ContainerSlyder = styled.div`
    overflow: hidden;
    display: grid;
    margin-top: 127px;
    margin-bottom:127px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4 ,1fr);
    grid-gap: 30px;
    @media ${MQ.md} {
        margin-bottom: 150px;
        grid-template-columns: 1fr 29.42vw 2.86vw 4.16vw 2.81vw 31.92vw 1fr;
        grid-template-rows: 6.98vw auto 47px 26.09vw 2.24vw;
        grid-gap: 0;
    }
`;

export const Container1 = styled.div`
    z-index: 2;
    padding: 50px 30px;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    background: #293141;
    height: 283px;
    @media ${MQ.md} {
        height: auto;
        grid-column: 2/4;
        grid-row: 2/3;
        padding: 20px;
    }
    @media ${MQ.lg} {
        padding: 50px 30px;
    }
    h2 {
        color: white;
        font-size: 35px;
        margin: 0 0 16px;
        @media ${MQ.lg} {
            font-size: 50px;
        }
    }
    p {
        color: white;
        font-size: 20px;
        line-height: 35px;
        @media ${MQ.lg} {
            font-size: 30px;
            line-height: 40px;
        }
    }

`;
export const ContainerSlyderButton = styled.div`
    display: flex; 
`;
export const ButtonSC = styled.button`
    background: ${props => props.colorSC ? "rgba(0,0,0,.5)": "rgba(0,0,0,.3)" };
    transition: background .5s;
    border-radius: 50%;
    margin-right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    @media ${MQ.lg} {
        width: 40px;
        height: 40px;
        margin-right: 30px;
    }
`;
export const Container2 = styled.div`
    overflow: hidden;
    position: relative;
    @media ${MQ.md} {
        grid-column: 3/7;
        grid-row: 1/3;
    }
`;
export const SlyderSC = styled.div`
    width: 300%;
    height: 100%;
    display: flex;
    position: absolute;
    top: 0; 
    left: ${props => props.left};
    transition: left 1s;
    a {
        height: 100%;
        width: calc(100% / 3);
        img {
            height: 100%;
            object-fit: cover;
            width: 100%;
        }
    }
`;
export const Container3 = styled.div`
    position: relative;
    @media ${MQ.md} {
        grid-column: 2/5;
        grid-row: 4/5;
    }
    img {
        width: 100%;
        height: 100%;
    }
    ::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(53, 124, 57, .5);
        content: "";
    }
`;
export const Container4 = styled.div`
    position: relative;
    @media ${MQ.md} {
        grid-column: 6/7;
        grid-row: 4/6;
    }
    img {
        width: 100%;
        height: 100%;
    }
    ::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(228, 183, 59,.5);;
        content: "";
    }
`;

export const SubTitle = styled.h3`
    position: absolute;
    right: 44px;
    bottom: 25px;
    margin: 0;
    color: white;
    font-weight: 700;
    font-size: 50px;
    @media ${MQ.lg} {
        font-size: 71px;
        bottom: 52px;
    }
`;