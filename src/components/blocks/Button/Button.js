import React from 'react';

const Button = ({text, styleName, btnForm}) => {

  const ButtonLink = () => {
    return <a href='/' className={`btn btn_link ${styleName}`}><span>{text}</span></a>;
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
