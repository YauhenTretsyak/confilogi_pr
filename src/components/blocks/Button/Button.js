import React from 'react';

const Button = ({text, styleName, btnForm}) => {

  const ButtonLink = () => {
    return <button className={`btn ${styleName}`}><a href='/' className='btn_link'>{text}</a></button>;
  };

  const ButtonForm = () => {
    return(
      <button 
        className={`btn ${styleName}`}
        name="submit" 
        type="submit"
      >
        {text}
      </button>
    );
  };

  const button = btnForm ? <ButtonForm /> : <ButtonLink />

  return button;
};

export default Button;
