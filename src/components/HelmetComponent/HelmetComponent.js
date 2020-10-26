import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetComponent = ({
  title,
  name,
  content,
  faviconUrl
}) => {
  return(
    <>
      <Helmet>
        <title>{ title }</title>
        <meta charSet="utf-8" />
        <meta name={ name } content={ content } />
        <link rel='icon' type='image/png' href={ faviconUrl } sizes='16x16' />
      </Helmet>
    </>
  )
};
 
export default HelmetComponent;