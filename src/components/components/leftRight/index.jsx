import React from 'react';

import {
    LeftRightSC,
    ContainerImg,
    ContainerText
} from './styled';



function LeftRight(props) {
    const {src, reverse, center} = props;
    return(
        <LeftRightSC reverse={reverse} center={center}> 
            <ContainerImg>
                <img src={src} alt=""/>
            </ContainerImg>
            <ContainerText>
                {props.children}
            </ContainerText>
        </LeftRightSC>
    );
}

export default LeftRight;