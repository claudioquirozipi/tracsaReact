import React from 'react';

//Styled-Components
import {
    ContainerCards,
    CardSC
} from './styled';

//Assets
import img1 from '../../../img/index/index__card1.png';
import img2 from '../../../img/index/index__card2.png';
import img3 from '../../../img/index/index__card3.png';

function Cards() {
    return(
        <ContainerCards>
            <CardSC>
                <img src={img1} alt="Syngenta"/>
                <p>"El bajo peso de sus correas nos redujo tiempo y facilidad significativa en el mantenimiento, y un 25% menos de consumo de energía"</p>
                <s>
                    Evandro Silva De Freitas<br/>
                    <span>Jefe de Mantenimiento</span>
                </s>
            </CardSC>
            <CardSC>
                <img src={img2} alt="The andersons"/>
                <p>"El bajo peso de sus correas nos redujo tiempo y facilidad significativa en el mantenimiento, y un 25% menos de consumo de energía"</p>
                <s>
                    Evandro Silva De Freitas<br/>
                    <span>Jefe de Mantenimiento</span>
                </s>
            </CardSC>
            <CardSC>
                <img src={img3} alt="Cargill"/>
                <p>"El bajo peso de sus correas nos redujo tiempo y facilidad significativa en el mantenimiento, y un 25% menos de consumo de energía"</p>
                <s>
                    Evandro Silva De Freitas<br/>
                    <span>Jefe de Mantenimiento</span>
                </s>
            </CardSC>
        </ContainerCards>
        )
}

export default Cards;