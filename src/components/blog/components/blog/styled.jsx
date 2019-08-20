import styled from 'styled-components';
import {MQ} from '../../../../config/media';

export const TitleBlog = styled.h1`
    margin: 50px 0;
    text-align: center;
`;

export const BlogsContainer = styled.div`
    padding: 0 8.3vw;
    margin: 0 0 150px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px;
    @media ${MQ.sm}{
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3vw;
    }
    @media ${MQ.md}{
        grid-template-columns: repeat(3, 1fr);
    }
    div {
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
        overflow: hidden;
        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        h2 {
            margin: 20px 15px 5px;
        }
        p {
            margin: 0 15px;
        }
        a {
            margin: 15px auto;
            display: block;
            width: 50%;
            padding: 15px 0;
            text-align: center;
            background: ${props => props.bgLink || "#17a2b8"};
            color: ${props => props.colorLink || "white"};
            border-radius: 4px;
            text-decoration: none;
        }
    }
`;

export const BlogContainer = styled.div`
    padding: 0 8.3vw;
    margin: 0 auto 150px;
    max-width: 760px;
    img {
        width: 100%;
        margin: 25px auto;
    }
    h2 {
        margin: 20px 0 ;
    }
`;
