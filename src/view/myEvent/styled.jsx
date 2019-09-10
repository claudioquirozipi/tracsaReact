import styled from 'styled-components';
import {MQ} from '../../config/media';

export const ContainerEvent = styled.main`
    background: #f1f2f6;
    display: flex;
    justify-content: center;
    padding: 0;
    @media ${MQ.md} {
        padding: 16px 0 ;
    }
`;
export const Paper = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 678px;
    padding: 26.5px 0;
    @media ${MQ.md} {
        padding: 26.5px 40px;
    }
`;
export const Logo = styled.img`
    height: 20px;
    width: auto;
    margin-bottom: 18px;
`;
export const Principal = styled.div`
    background: white;
    margin-bottom: 25px;
    img {
        width: 100%;
        height: auto;
    }
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 33px;
        h1 {
            line-height: 40px;
            color: #133049;
            margin: 34px 0 30px;
            text-align: center;
            font-size: 18px;
            @media ${MQ.md} {
                font-size: 24px;
            }
        }
        p {
            text-align: center;
            color: #6B6B6B;
            line-height: 24px;
            font-size: 12px;
            @media ${MQ.md} {
                font-size: 12px;
            }
        }
        a {
            background: #0071B8;
            font-size: 14px;
            border-radius: 50px;
            height: 32px;
            width: 144px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            text-decoration: none;
            margin: 45px 0 39px;
        }
    }

`;
export const ImgText = styled.div`
    display: flex;
    width: 100%;
    background: white;
    margin-bottom: 25px;
    flex-direction: column;
    @media ${MQ.md} {
        flex-direction: ${props => props.reverse ? "row-reverse": "row"};
    }
    img {
        width: 100%;
        @media ${MQ.md} {
            width: 50%;
        }
    }
    div {
        padding: 0px 16px;
        h2 {
            color: #133049;
            font-size: 16px;
            font-weight: bold;
            line-height: 24px;
            margin: 24px 0 22px;
            text-align: center;
            @media ${MQ.md} {
                text-align: left;
            }
        }
        p {
            color: #6B6B6B;
            line-height: 24px;
            text-align: center;
            font-size: 12px;
            @media ${MQ.md} {
                font-size: 10px;
                text-align: left;
            }
        }
    }
`;

export const WhiteText = styled.p`
    background: white;
    margin: 0 0 25px;
    padding: 16px 26px;
    color: #6B6B6B;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    span {
        font-weight: bold;
    }
    @media ${MQ.md} {
    font-size: 10px;
    }
`;

export const BlueText = styled.p`
    background: #0071B8;
    color: #FFFFFF;
    text-align: center;
    font-size: 12px;
    line-height: 24px;
    padding: 16px 26px;
    span {
        font-weight: bold;
    }
    @media ${MQ.md} {
        padding: 16px 110px;
        font-size: 12px;
    }
`;