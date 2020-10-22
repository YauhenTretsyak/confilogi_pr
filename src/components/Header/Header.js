import React from 'react';
import fb from '../../assets/svg/icon-facebook.svg';
import twitter from '../../assets/svg/icon-twitter.svg';
import instagram from '../../assets/svg/icon-instagram.svg';
import threeDots from '../../assets/svg/three-dots.svg';

function Header() {
  return (
    <>
      <header className='header'>
        <div className='box_wrapper'>
          <div className='header__social-media-wrapper'>
            <div className='header__social-media'>
              <img
                className='header__social-media__item'
                src={fb}
                alt='fb-logo'
              />
              <img
                className='header__social-media__item'
                src={twitter}
                alt='twitter-logo'
              />
              <img
                className='header__social-media__item'
                src={instagram}
                alt='instagram-logo'
              />
            </div>
            <img src={threeDots} alt='menu' />
          </div>
          <div className='logo-wrapper'>
            <h1 className='logo'>Shine like a</h1>
            <h1 className='logo logo-star'>Star!</h1>
          </div>
          <p className='header__text'>Poznaj pikantne fakty z życia gwiazd!</p>
          <span className=''></span>
        </div>
      </header>
    </>
  );
}

export default Header;
