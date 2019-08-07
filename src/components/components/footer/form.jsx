import React from 'react';


//Assets
import imgName from '../../../img/footer/person.svg';
import imgEmail from '../../../img/footer/email.svg';
import imgWeb from '../../../img/footer/language.svg';
import imgPhone from '../../../img/footer/phone.svg';
import imgText from '../../../img/footer/comment.svg';


import {
    FormSC,
    InputSC,
    ContainerButton
} from './styled';

//Functions
const InputTextarea = (props) => {
    const {type, placeholder, required } = props;
    if(type == "textarea") {
        return(
            <textarea />
        );
    }
    return(
        <input type={type} placeholder={placeholder} required ={required }/>
    )
}
const Input = (props) => {
    const {placeholder, src, type, required } = props;
    return(
        <InputSC>
            <img src={src} alt={placeholder} />
            <InputTextarea type={type} placeholder={placeholder} required ={required }/>
            
        </InputSC>
    );
}

function Form() {
    return(
        <FormSC>
            <h4>Contáctanos</h4>
            <Input placeholder="Nombre" src={imgName} type={"Text"} required ={true}/>
            <Input placeholder="Email" src={imgEmail} type={"email"} required ={true}/>
            <Input placeholder="Web" src={imgWeb} type={"url"} required ={true}/>
            <Input placeholder="Teléfono" src={imgPhone} type={"number"}/>
            <Input placeholder="Descripción" src={imgText} type={"textarea"}/>
            <ContainerButton>
                <input type="submit" value="Enviar"/>
            </ContainerButton>
        </FormSC>
    );
}

export default Form;