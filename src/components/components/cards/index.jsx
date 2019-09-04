import React from 'react';

//Styled-Components
import {
    H2Title,
    ContainerCards,
    CardSC
} from './styled';

//Assets
import img1 from '../../../img/index/index__card1.png';
import img2 from '../../../img/index/index__card2.jpg';
import img3 from '../../../img/index/index__card3.jpg';

function Cards() {
    return(
        <>
            <H2Title>Que dicen de nosotros</H2Title>
            <ContainerCards>
                <CardSC>
                    <img src={img1} alt="Bunge"/>
                    <p>"Conseguimos resultados excelentes con las correas DAUER en nuestros equipamientos."</p>
                    <s>
                        RODRIGO BERTOLOTTI<br/>
                        <span>Supervisor de mantenimiento, Bunge</span>
                    </s>
                </CardSC>
                <CardSC>
                    <img src={img2} alt="Del Guazu"/>
                    <p>“Optamos por elegir correas UNIPLY, logrando importantes ventajas respecto
                         de las correas de caucho.” </p>
                    <s>
                    DAMIAN SAVA <br/>
                        <span>Gerente operativo, PDG.</span>
                    </s>
                </CardSC>
                <CardSC>
                    <img src={img3} alt="BRF"/>
                    <p>"El bajo peso de sus correas UNIPLY nos redujo tiempo, facilidad en el mantenimiento, y un 25% menos de consumo de energía”.</p>
                    <s>
                        EVANDRO SILVA DE FREITAS<br/>
                        <span>Gerente de mantenimiento, BRF</span>
                    </s>
                </CardSC>
            </ContainerCards>
        </>
        )
}

export default Cards;