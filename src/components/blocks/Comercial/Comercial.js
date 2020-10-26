import React from 'react';
import Button from '../Button/Button.js';

const Comercial = ({ bgImage, btnTilte, btnStyle, btnLink , blogSmall, blogWide }) => {
  const btnColor =
    btnStyle === 'white' ? 'comercial__btn_white' : 'comercial__btn_orange';

  const topLine = blogWide 
                  ? null 
                  : blogSmall
                  ? null
                  : <span className='blog_post__highlight'></span>
                   

  return (
    <>
      { topLine }
      <div className='comercial'>
        <div className='comercial__content-wrapper'>
          <div className='comercial__img-wrapper'>
            <img className='comercial__img' alt='banner' src={bgImage}></img>
          </div>
          <Button
            text={btnTilte}
            btnLink={ btnLink }
            styleName={
              blogSmall
                ? `comercial-small-blog__btn comercial__btn ${btnColor}`
                : blogWide
                ? `comercial-wide-blog__btn comercial__btn ${btnColor}`
                : `comercial__btn ${btnColor}`
            }
          />
        </div>
      </div>
    </>
  );
};

export default Comercial;
