import React from 'react';

const Navigation = ({text, styleName}) => {
  return <a className={styleName} href='/'>{text}</a>;
};

export default Navigation;
