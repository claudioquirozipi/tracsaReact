import React, {useState} from 'react';
import firebase from 'firebase';



//Assets
import imgName from '../../../img/footer/person.svg';
import imgEmail from '../../../img/footer/email.svg';
import imgWeb from '../../../img/footer/language.svg';
import imgPhone from '../../../img/footer/phone.svg';
import imgText from '../../../img/footer/comment.svg';

//Styled-Componets
import {
    FormSC,
    InputSC,
    ContainerButton
} from './styled';

var firebaseConfig = {
    apiKey: "AIzaSyCsF9bsfDSp8x4FVQb22sPn8KkGxlLXJuE",
    authDomain: "argtracsa.firebaseapp.com",
    databaseURL: "https://argtracsa.firebaseio.com",
    projectId: "argtracsa",
    storageBucket: "argtracsa.appspot.com",
    messagingSenderId: "409010144407",
    appId: "1:409010144407:web:e76cdcb51e858722"
};
   
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

//Functions
const InputTextarea = (props) => {
    const {type, placeholder, required ,onChange} = props;
    if(type === "textarea") {
        return(
            <textarea onChange={onChange}/>
        );
    }
    return(
        <input type={type} placeholder={placeholder} required ={required } onChange={onChange}/>
    )
}
const Input = (props) => {
    const {placeholder, src, type, required, onChange} = props;
    return(
        <InputSC>
            <img src={src} alt={placeholder} />
            <InputTextarea type={type} placeholder={placeholder} required ={required } onChange={onChange}/>
            
        </InputSC>
    );
}
function handleSubmit(e,name, email, web, phone, description) {
    e.preventDefault();
    db.collection("users").add({
        name: name,
        email: email,
        web: web,
        phone: phone,
        descrption: description
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("formFooter").reset();
        alert("inscrito corretamente");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [web, setWeb]= useState("");
    const [phone, setPhone]= useState("");
    const [description, setDescription] = useState("");
    function handleSetName(e) {setName(e.target.value)};
    function handleSetEmail(e) {setEmail(e.target.value)};
    function handleSetWeb(e) {setWeb(e.target.value)};
    function handleSetPhone(e) {setPhone(e.target.value)};
    function handleSetDescription(e) {setDescription(e.target.value)};


    return(
        <FormSC id="formFooter" onSubmit={(e) =>handleSubmit(e, name, email, web, phone, description)}>
            <h4>Contáctanos</h4>
            <Input placeholder="Nombre" src={imgName} type={"Text"} required ={true} onChange={handleSetName}/>
            <Input placeholder="Email" src={imgEmail} type={"email"} required ={true} onChange={handleSetEmail}/>
            <Input placeholder="Web" src={imgWeb} type={"url"} required ={true} onChange={handleSetWeb}/>
            <Input placeholder="Teléfono" src={imgPhone} type={"number"} onChange={handleSetPhone}/>
            <Input placeholder="Descripción" src={imgText} type={"textarea"} onChange={handleSetDescription}/>
            <ContainerButton>
                <input type="submit" value="Enviar"/>
            </ContainerButton>
        </FormSC>
    );
}

export default Form;