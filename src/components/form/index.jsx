import React from 'react';
import {Link} from 'react-router-dom';

//Styled-Components
import {
    ContainerForm,
    InputVerEvento,
    InputRadio,
    InputButton,
    ContainerInputs,
    Message,
    ContainerQR,
    ClouseSC
} from './styled';

//Assets
import imgForm from '../../img/form/broly.jpeg';

//Function-Componenst
const Clouse = () => {
    return(
        <ClouseSC>
            <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            </Link>            
        </ClouseSC>
    )
};


function Form() {
    return(
        <ContainerForm>
            <form>
                <Clouse />
                <h1>Queremos invitarte<br/> a nuestro evento</h1>
                <InputVerEvento>
                    <img src={imgForm} alt=""/>
                    <a href="http://google.com" target="_blank" rel="noopener noreferrer">Ver evento</a>
                </InputVerEvento>
                <InputRadio>
                    <h2>¿Asistirá al evento?</h2>
                    <div>
                        <input type="radio" name="Asistir" id="Si"/>
                        <label htmlFor="Si"><div></div><p>Sí</p></label>
                        
                        <input type="radio" name="Asistir" id="No"/>
                        <label htmlFor="No"><div></div><p>No</p></label>             
                    </div>
                </InputRadio>

                <ContainerInputs>
                    <div>
                        <label htmlFor="">Nombre</label>
                        <input type="text" placeholder="Write somethin"/>
                    </div>
                    <div>
                        <label htmlFor="">Teléfono</label>
                        <input type="number" placeholder="Write somethin"/>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Write somethin"/>
                    </div>
                </ContainerInputs>
                <Message>Recibirá un código QR que será<br/>su estrada a este envento.</Message>
                <InputButton>Salir</InputButton>
                <ContainerQR>
                    <Clouse />
                    <h2>Te estaremos<br/>esperando.</h2>
                    <img src={imgForm} alt="Código QR"/>
                    <h3>123456789123</h3>
                    <article>
                        <h3>Lugar</h3>
                        <p>
                            Av, cabildo 1223, Rosario, <br/>
                            Santa Fe, Argentina (Salon <br/>
                            metropolitano.)
                        </p>
                        <h3>Fecha y hora</h3>
                        <p>12/08/19 - 08:00 a 16:00</p>
                    </article>
                </ContainerQR>
            </form>
        </ContainerForm>
    );
}

export default Form;