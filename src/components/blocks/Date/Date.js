import React, { useState } from 'react';
import clock from '../../../assets/svg/icon-clock.svg';
import moment from 'moment';
import 'moment/locale/pl';

const Date = ({ classnameDate, classnameText }) => {
  return (
    <div className={`date ${classnameDate}`}>
      <img src={clock} alt='clock'></img>
      <p className={`date_text ${classnameText}`}>
        {moment().subtract(4, 'days').format('MMMM Do YYYY')}
      </p>
    </div>
  );
};

export default Date;
