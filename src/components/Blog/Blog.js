import React from 'react';
import Button from '../blocks/Button/Button.js';
import Navigation from '../blocks/Navigation/Navigation.js';
import mainPhoto from '../../assets/photo/main-photo.png';
import Date from '../blocks/Date/Date.js';
import Author from '../blocks/Author/Author.js';

const Blog = () => {
  return (
    <section className='blog'>
      <div className='blog_links'>
        <Navigation text={'Aktualności'} styleName={'blog_links_item'} /> /{' '}
        <Navigation text={'Przemiany gwiazd'} styleName={'blog_links_item'} /> /{' '}
        <span>"Wow! Niesamowity sekret Kylie..."</span>
      </div>
      <Button styleName='blog_btn' text='Przemiany gwiazd' />
      <div className='blog_info'>
        <Date />
        <Author />
      </div>
      <h1 className='blog_title'>
        Wow! Niesamowity sekret Kylie Jenner odkryty – dzięki{' '}
        <span className='pink-text'>TEJ</span> prostej metodzie z łatwością
        powiększysz i ujędrnisz biust oraz pośladki tak jak ona!
      </h1>
      <img className='blog_img' src={mainPhoto} alt='kylie-jenner'></img>
      {/* <Paragraph /> */}
    </section>
  );
};

export default Blog;
