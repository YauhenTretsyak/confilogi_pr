import React from 'react';

//** if btnForm === true, resolved Button, else link as a button  */

const Button = ({ text, styleName, btnForm, btnLink, btnSpan }) => {

  const ButtonLink = () => {
    return <a href={ btnLink } className={`btn btn_link ${styleName}`}><span>{text}</span></a>;
  };

  const ButtonSpan = () => {
    return <span className={`btn ${styleName}`}>{text}</span>
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

  const button = btnForm 
        ? <ButtonForm /> 
        : btnSpan
        ? <ButtonSpan />
        : <ButtonLink />

  return button;
};

export default Button;


