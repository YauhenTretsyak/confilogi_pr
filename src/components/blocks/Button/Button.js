import React from 'react';

const Button = ({text, styleName}) => {
  return <button className={`btn ${styleName}`}>{text}</button>;
};

export default Button;
