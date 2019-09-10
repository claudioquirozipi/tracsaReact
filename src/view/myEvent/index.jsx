import React from 'react';
import {Link} from 'react-router-dom';

import {
    ContainerEvent,
    Paper,
    Logo,
    Principal,
    ImgText,
    WhiteText,
    BlueText
} from './styled';



//Assets
import logo from '../../img/myEvent/logo.svg';
import img1 from '../../img/myEvent/img1.png';
import img2 from '../../img/myEvent/img2.png';
import img3 from '../../img/myEvent/img3.png';
import img4 from '../../img/myEvent/img4.png';
import img5 from '../../img/myEvent/img5.png';




function MyEvent() {
    return(
        <ContainerEvent>
            <Paper>
                <Logo src={logo} />
                <Principal>
                    <img src={img1} alt=""/>
                    <div>
                        <h1>Jornada de Capacitación<br/>e Innovaciones Técnicas</h1>
                        <p>La jornada está programada en base a 4 estaciones o módulos en los cuales capacitaremos a los participantes observando diferentes aspectos de operatividad y seguridad en el uso de Correas Transportadoras o Elevadoras y Revestimientos Antiabrasivos. Se podrán apreciar las ventajas comparativas de las buenas prácticas de uso.</p>
                        <Link to="/form">Me interesa</Link>
                    </div>
                </Principal>
                <ImgText reverse>
                    <img src={img2}/>
                    <div>
                        <h2>Nuevos procedimientos de empalmes</h2>
                        <p>Capacitación de nuevo procedimiento de empalme en caliente de Correas Transportadoras. Asiste a la realización de un empalme en tiempo real donde podrán observarse los diferentes pasos en su realización.</p>
                    </div>
                </ImgText>
                <ImgText >
                    <img src={img3}/>
                    <div>
                        <h2>Resistencia aceites en correas transportadoras y elevadoras.</h2>
                        <p>Detalle procedimiento de la Norma IRAM 113012 e interpretación de resultados. Permitirá conocer los efectos del aceite de forma extrema sobre distintas correas pudiendo contemplar las ventajas del poliuretano sobre el caucho.</p>
                    </div>
                </ImgText>
                <ImgText reverse> 
                    <img src={img4}/>
                    <div>
                        <h2>Evita los problemas de desgaste por abrasión</h2>
                        <p>Ensayo de abrasión para testear y comparar diferentes productos utilizados para la protección anti abrasiva. Se presentará un procedimiento extremo fuera de norma, lo que permitirá evaluar la mayor resistencia entre los distintos tipos de revestimientos.</p>
                    </div>
                </ImgText>
                <ImgText >
                    <img src={img5}/>
                    <div>
                        <h2>Evita los riesgos debido a la propagación de llamas</h2>
                        <p>Ensayo de resistencia a la propagación de Llama según Norma Internacional IRAM 113120. Realizaremos un experimento a campo donde se podrá chequear el comportamiento de las correas y revestimientos en una exposición al fuego.</p>
                    </div>
                </ImgText>
                <WhiteText>
                    El cronograma del evento consta de una recepción con desayuno de <span>09:00 a 09:30,</span> seguido de una introducción
                    por parte de nuestro equipo técnico de <span>09:30 a 10:00,</span> luego comenzarán las demostraciones de <span>10:00 a 12:00,</span>
                    Al terminar los ensayos los responsables técnicos evacuarán todas las dudas, finalizando el evento con un
                    almuerzo en conjunto con la entrega de premios y certificados de asistencia.
                </WhiteText>
                <BlueText>
                    El evento se realizará el día <span>08/11/19</span> a las <span>09.00 am </span>
                     en <span>Av. Circunvalación 3900,</span> Rosario, Santa Fe, Argentina. C.P. S-2010-IQA
                    con emisión de <span>certificado de asistencia.</span>
                </BlueText>
            </Paper>
        </ContainerEvent>
    )
}

export default MyEvent;