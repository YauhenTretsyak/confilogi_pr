import React from 'react';

const Paragraph = (props) => {
    return (
        <p className='paragraph_text'>{props.children}</p>
    )
}

export default Paragraph;