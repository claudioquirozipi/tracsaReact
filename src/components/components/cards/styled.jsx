import styled from 'styled-components';
import {MQ} from '../../../config/media';

export const H2Title = styled.h2`
    margin: 0 0 100px;
    text-align: center;
    color: #585858;
    font-weight: 700;
    font-size: 25px;
    @media ${MQ.md} {
        font-size: 45px;
    }
`;

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${MQ.md} {
        justify-content: center;
        margin-bottom: 150px;
        flex-direction: row;
    }
`;

export const CardSC = styled.div`
    background: white;
    border-radius: 8px;
    margin: 0 3% 50px;
    padding: 40px 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 3px 3px 20px 3px rgba(119, 119, 119, 0.3);
    width: 270px;
    @media ${MQ.md} {
        height: 660px;
    }
    img {
        width: 100%;
    }
    p {
        font-size: 15px;
        margin-top: 40px;   
        line-height: 40px;
        font-weight: 600;
        text-align: center;
        color: #7F7F7F; 
    }
    s {
        color: red;
        font-size: 15px;
        color: #585858;
        text-decoration: none;
        line-height: 40px;
        font-weight: 600;
        text-align: center;
        span {
            font-weight: 900;
            font-size: 16px;
        }
    }
`;

