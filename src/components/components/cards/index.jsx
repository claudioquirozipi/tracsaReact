import React from 'react';

//Styled-Components
import {
    H2Title,
    ContainerCards,
    CardSC
} from './styled';

//Assets
import img1 from '../../../img/index/index__card1.png';
import img2 from '../../../img/index/index__card2.png';
import img3 from '../../../img/index/index__card3.png';

function Cards() {
    return(
        <>
            <H2Title>Que dicen de nosotros</H2Title>
            <ContainerCards>
                <CardSC>
                    <img src={img1} alt="Syngenta"/>
                    <p>"Conseguimos resultados muito bons com as correias DAUER em nossos equipamentos".</p>
                    <s>
                        RODRIGO BERTOLOTTI<br/>
                        <span>Supervisor de manutenção, Bunge</span>
                    </s>
                </CardSC>
                <CardSC>
                    <img src={img2} alt="The andersons"/>
                    <p>“Optamos por elegir correas UNIPLY, logrando importantes ventajas respecto de las correas de caucho. Destacando mayor durabilidad, disminución de parada operativa debido a la rapidez de los empalmes en caliente” </p>
                    <s>
                    DAMIAN SAVA <br/>
                        <span>Gerente operativo de Puerto del guazu</span>
                    </s>
                </CardSC>
                <CardSC>
                    <img src={img3} alt="Cargill"/>
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