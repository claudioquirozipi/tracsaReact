import React from 'react';

//Components
import NavCQ from './components/nav/index';
import BlgoCQ from './components/blog/blogCQ';

//Assest
import img from '../../img/blog/12uniply.jpg';

function Blog3() {
    return(
        <>
            <NavCQ bgNav="#293141" imgUrl="/" links={[{text:"Blog", url:"/blog"}]} imgAlt="tracsa"/>
            <BlgoCQ>
            <h1>DAUER, MADE IN ARGENTINA</h1>
                <img src={img} alt="dauer"/>
                <p>Se trata de una banda transportadora y elevadora. La misma fue demostrada técnicamente  en vivo en Whats`new de GEAPS 2018. Superando ampliamente las marcas utilizadas hoy en dia a nivel mundial.</p>
                <p>Entrevistamos a Guillermo Bauzas. Director comercial para Latinoamérica de la firma Tracsa, quien realizó la presentación.</p>
                <h2>¿Qué representa esto para los usuarios de este nicho agroindustrial?</h2>
                <p>Principalmente el uso de coberturas de poliuretano implica una duración ampliamente mayor a las correas convencionales de caucho de primeras marcas. Esto incurre a menos mantenimiento y costos, por ende mayor eficiencia productiva para el transporte de granos.</p>
                <h2>¿Por qué crees que quedaron todos sorprendidos en el evento al realizar la demostración?</h2>
                <p>Porque no es común en una presentación de 30 minutos mostrar tan objetivamente cualidades técnicas, este espacio generalmente es usado para mostrar diapositivas y que un técnico hable del producto.</p>
                <p>Nosotros quisimos hacer algo diferente y que a su vez sea muy contundente. Por ende decidimos realizar en vivo y frente a todo el público demostraciones técnicas relacionadas a la calidad de la correa y a su uso en la realidad.</p>
                <p>La demostración se basó en 4 pilares fundamentales:</p>
                <p>La primera respecto a la calidad, los ensayos fueron de abrasión y resistencia a los aceites. Donde todos los presentes pudieron apreciar las grandes ventajas de esta correa y a su vez la enorme diferencia en relación al caucho.</p>
                <p>En relación a la seguridad, se ensayó , auto extinción a la llama, y antiestaticidad. Mostrando estándares como requieren las empresas de primera línea.</p>
                <h2>¿Creen que fue una buena estrategia compararse con Continental que es una marca reconocida a nivel mundial?</h2>
                <p>Como decía anteriormente en los hechos está la verdad. Nuestros objetivos en esta demostración no persiguen hablar mal de una marca excelente como es ContiTech, sino demostrar que DAUER es ampliamente superior.</p>
                <h2>¿Este desarrollo ya lo están comercializando?</h2>
                <p>Sí, y con excelente aceptación en importantes clientes como Bunge, Del Guazu, Arcor, Dreyfus, Puerto de Santa Fe, Cargill, AFA, ACA, Molinos Cañuelas, Entre otros. Y países vecinos como Paraguay y Uruguay. Nuestro plan es posicionarla también en Brasil para principios del 2019.</p>
                <p>Por último, solo de curiosidad. ¿Por qué Dauer, qué significa?</p>
                <p>Esta marca la definimos en conjunto con nuestro equipo de marketing. Pero respondiendo a tu pregunta, Dauer significa duración.</p>
                <p>Bueno Guillermo felicitaciones a la firma y todo su equipo por este desarrollo, reconocido en el plano internacional.</p>
            </BlgoCQ>
        </>
    );
}

export default Blog3;