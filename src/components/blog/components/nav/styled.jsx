import styled from 'styled-components';

export const NavContainer = styled.nav`
    background: ${props => props.bgNav || "#17a2b8"};
    padding: 0 8.3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    a{
        height: 30px;
        width: 30px;
    }
    a > img {
        height: 30px;
    }
    & > ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            margin-left: 15px;
            list-style: none;
            a {
                color: white;
                text-decoration: none;
                font-weight: 700;
            }
        }
    }
`;

export const HamburgerContainer = styled.div`
    position: relative;
    cursor: pointer;
    div {
        width: 24px;
        height: 24px; 
    }
`;

export const ToggleHamburger = styled.ul`
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        left: 0;
        top: 0;
        transform: translateX(-120%) scaleX(${props => props.viewToggle ? "1": "0"});
        transition: transform .3s;
        transform-origin: right top;
        background: white;
        border-radius: 8px;
        padding: 15px;
        width: 150px;
        box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
        li{
            width: 100%;
            a{
                list-style: none;
                color: #2E70E6;
                font-size: 18px;
                margin:0;
                display: block;
                text-align: center;
                font-weight: 700;
                padding: 15px 0;
                border-radius: 5px;
                width: 100%;
                &:hover {
                    background: #2E70E6;
                    color: white;
                }
            }
        }
`;