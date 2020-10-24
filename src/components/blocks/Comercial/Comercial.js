import React from 'react';
import Button from '../Button/Button.js';

const Comercial = ({ bgImage, btnTilte, btnStyle, btnLink }) => {

  const btnColor = btnStyle === 'white' ? 'comercial__btn_white' : 'comercial__btn_orange';

  return(
    <>
      <div className='comercial'>
        <div className='comercial__content-wrapper'>
          <div className='comercial__img-wrapper'>
            <img 
              className='comercial__img' 
              alt='banner'
              src={ bgImage }
            ></img>
          </div>
          <Button 
            text={ btnTilte }
            btnLink={ btnLink }
            styleName={`comercial__btn ${ btnColor }`}
          />
        </div>
      </div>
    </>
  );
};

export default Comercial;