import React from 'react';
import Data from '../../data/Data.js';
import LinkItem from './LinkItem/LinkItem.js';

const Footer = () => {

  const linkData = Data.footerLinks;

  const footerLinks = linkData.map((item, index) => {
    return (
      <LinkItem key={index + 'bvccvdm8795g'} content={item}/>
    )
  })
  
  return (
    <section className="footer">
      <div className="box_wrapper">
        <div className="footer_content-wrapper">
          <p className="footer_copyright">Copyright © 2020</p>
          <div className="footer_links-wrapper">
            { footerLinks }
          </div>
        </div>
      </div>
    </section>
  )
};

export default Footer;