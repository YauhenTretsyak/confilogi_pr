import React from 'react';
import author from '../../../assets/svg/icon-author.svg';
import data from '../../../data/Data.js'

const Author = () => {
  return (
    <div className='author'>
      <img src={author} alt=''></img>
      <p className='author_text'>Autor: {data.author}</p>
    </div>
  );
};

export default Author;
