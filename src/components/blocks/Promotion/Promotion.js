import React from 'react';

const Promotion = (props) => {
    return (
        <p className='promotion__text'>{props.children}</p>
    )
}

export default Promotion;