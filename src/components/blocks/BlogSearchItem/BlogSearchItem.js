import React from 'react';
import BlogHeader from '../BlogHeader/BlogHeader.js';
import Button from '../Button/Button.js';

const BlogSearchItem = ({ title, btnTitle, content, placeHolderTitle }) => {

  const DescriptionContent = () => {
    return(
      <p className='blog_search_item__content'>{ content }</p>
    );
  };

  const description = content ? <DescriptionContent /> : null;

  return(
    <>
      <BlogHeader title={ title } />
      { description }

      <form className='blog_search_item__form' >
        <input 
          className='blog_search_item__form_input'
          placeholder={ placeHolderTitle }
        />
        <Button 
          text={ btnTitle }
          styleName={'blog_search_item__form_btn'}
          btnForm={ true }
        />
      </form>
    </>
  )
};

export default BlogSearchItem;