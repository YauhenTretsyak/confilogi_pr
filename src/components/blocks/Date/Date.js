import React from 'react';
import clock from '../../../assets/svg/icon-clock.svg';
import moment from 'moment';
import 'moment/locale/pl';

const Date = () => {
  return (
    <div className='date'>
      <img src={clock} alt=''></img>
      <p className='date_text'>{moment().format('MMMM Do YYYY')}</p>
    </div>
  );
};

export default Date;
