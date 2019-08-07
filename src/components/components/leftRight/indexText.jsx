import React from 'react';

import {
    IndexTextSC
} from './styled';

function IndexText(props) {
    const { color, grey} = props;
    return(
        <IndexTextSC color={color} grey={grey}>
            {props.children}
        </IndexTextSC>
    );
}

export default IndexText;