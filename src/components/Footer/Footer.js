import React from 'react';
import Data from '../../data/Data.js';

const Footer = () => {
  
  return (
    <section className="footer">
      <div className="box_wrapper">
        <div className="footer_content-wrapper">
          <p className="footer_copyright">Copyright © 2020</p>
          <div className="footer_links-wrapper">
            <a className="footer_link" href="/">Polityka prywatności</a>
            <a className="footer_link" href="/">Mapa strony</a>
            <a className="footer_link" href="/">Cookies</a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Footer;