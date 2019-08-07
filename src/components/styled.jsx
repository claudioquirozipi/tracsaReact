import styled from 'styled-components';
import {MQ} from '../config/media';

//Assest 
import imgBg from '../img/index/imgBg.png';

export const IndexTextBlue = styled.div`
    h2 {
        font-size: 30px;
        margin-top: 150px;
        color: white;
        text-align: center;
        font-weight: 700;
        line-height: 1.4;
    }
    p {
        line-height: 3;
        font-size: 15px;
        margin-bottom: 150px;
        margin-top: 50px;
        text-align: center;
        font-weight: 600;
        color: white;
    }
`;

export const BgContainer = styled.div`
    background-image: url(${imgBg});
    background-size: cover;
    background-position: left center;
    @media ${MQ.md} {
        background-position: center;
    }
`;