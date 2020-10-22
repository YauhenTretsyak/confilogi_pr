import React from 'react';
import BlogHeader from '../BlogHeader/BlogHeader.js';

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
        <button className='blog_search_item__form_btn' name="submit" type="submit">
          { btnTitle }
        </button>
      </form>
    </>
  )
};

export default BlogSearchItem;