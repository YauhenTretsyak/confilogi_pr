import React from 'react';

const Button = ({text, styleName}) => {
  return <button className={`btn ${styleName}`}><a href='/' className='btn_link'>{text}</a></button>;
};

export default Button;
