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
          <div className='header_wrapper'>
            <div className='header_social-media'>
              <img
                className='header_social-media_item'
                src={fb}
                alt='fb-logo'
              />
              <img
                className='header_social-media_item'
                src={twitter}
                alt='twitter-logo'
              />
              <img
                className='header_social-media_item'
                src={instagram}
                alt='instagram-logo'
              />
            </div>
            <img
              className='header_menu'
              src={threeDots}
              alt='menu'
              onClick={() => setShowMenu(showMenu === true ? false : true)}
            />
          </div>
          <div className='logo'>
            <h1 className='logo_item'>Shine like a</h1>
            <h1 className='logo_item logo_item-star'>Star!</h1>
          </div>
          <p className='header_text'>Poznaj pikantne fakty z życia gwiazd!</p>
          <span className='header_highlight'></span>
            <nav
              className={
                showMenu
                  ? 'header_navigation header_navigation-show'
                  : 'header_navigation'
              }
            >
              {data.navigationLinks.map((link, index) => {
                return (
                  <Navigation
                    key={index}
                    text={link}
                    styleName={'header_navigation_item'}
                  />
                );
              })}
            </nav>
            <span
              className={
                showMenu
                  ? 'header_highlight header_highlight-show'
                  : 'header_highlight header_highlight-last'
              }
            ></span>
        </div>
      </header>
    </>
  );
};

export default Header;
