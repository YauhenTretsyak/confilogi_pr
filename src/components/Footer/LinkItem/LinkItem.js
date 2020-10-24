import React from 'react';

const LinkItem = ({ content, link }) => {
  return (
    <>
      <a className="footer_link" href={ link }>{ content }</a>
    </>
  )
};

export default LinkItem; 