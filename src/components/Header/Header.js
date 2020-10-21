import React from 'react';
import fb from '../../assets/svg/icon-facebook.svg';
import twitter from '../../assets/svg/icon-twitter.svg';
import instagram from '../../assets/svg/icon-instagram.svg';

function Header() {
  return (
    <>
      <header className='header'>
        <div className='header__social-media'>
          <img src={fb} />
          <img src={twitter} />
          <img src={instagram} />
        </div>
        <h1>Shine like a</h1>
        <h1>Star</h1>
        <p>Poznaj pikantne fakty z życia gwiazd!</p>
      </header>
      <span></span>
    </>
  );
}

export default Header;
