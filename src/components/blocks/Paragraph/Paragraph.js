import React from 'react';

const Paragraph = (props) => {
    return (
        <p className='paragraph__text'>{props.children}</p>
    )
}

export default Paragraph;