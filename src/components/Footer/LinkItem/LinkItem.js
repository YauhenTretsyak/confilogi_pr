import React from 'react';

const LinkItem = ({content}) => {
  return (
    <>
      <a className="footer_link" href="/">{content}</a>
    </>
  )
};

export default LinkItem;