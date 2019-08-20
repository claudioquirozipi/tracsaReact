import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
    background: #293141;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Card = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 50px;
    border-radius: 8px;
    h1, p {
        text-align: center;
    }
    a {
        background: #357C39;
        border-radius: 50px;
        color: white;
        text-decoration: none;
        width: 200px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        margin-top: 35px;
    }
`;
function Ok() {
    return(
        <Main>
            <Card>
                <h1>Felicidades</h1>
                <p>Tus datos fueron agregados<br/> correctamente.</p>
                <Link to="/">Volver</Link>
            </Card>
        </Main>
    )
}
export default Ok;