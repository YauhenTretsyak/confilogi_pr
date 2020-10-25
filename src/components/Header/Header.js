import React, { useState } from 'react';
import fb from '../../assets/svg/icon-facebook.svg';
import twitter from '../../assets/svg/icon-twitter.svg';
import instagram from '../../assets/svg/icon-instagram.svg';
import threeDots from '../../assets/svg/three-dots.svg';
import data from '../../data/Data.js';
import Navigation from '../blocks/Navigation/Navigation';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className='header'>
        <div className='box_wrapper'>
          <div className='header__wrapper'>
            <div className='header__social-media'>
              <a href='/'><img
                className='header__social-media_item'
                src={fb}
                alt='fb-logo'
              /></a>
              <a href='/'><img
                className='header__social-media_item'
                src={twitter}
                alt='twitter-logo'
              /></a>
              <a href='/'><img
                className='header__social-media_item'
                src={instagram}
                alt='instagram-logo'
              /></a>
            </div>
            <img
              className='header__menu'
              src={threeDots}
              alt='menu'
              onClick={() => setShowMenu(showMenu === true ? false : true)}
            />
          </div>
          <div className='logo'>
            <h1 className='logo__item'>Shine like a</h1>
            <h1 className='logo__item logo__item-star'>Star!</h1>
          </div>
          <p className='header__text'>Poznaj pikantne fakty z życia gwiazd!</p>
          <span className='header__highlight'></span>
            <nav
              className={
                showMenu
                  ? 'header__navigation header_navigation-show'
                  : 'header__navigation'
              }
            >
              {data.navigationLinks.map((link, index) => {
                return (
                  <Navigation
                    key={index}
                    text={link}
                    styleName={'header__navigation_item'}
                  />
                );
              })}
            </nav>
            <span
              className={
                showMenu
                  ? 'header__highlight header__highlight-show'
                  : 'header__highlight header__highlight-last'
              }
            ></span>
        </div>
      </header>
    </>
  );
};

export default Header;
