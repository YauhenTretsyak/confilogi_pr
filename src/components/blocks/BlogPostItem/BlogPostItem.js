import React from 'react';
import Date from '../Date/Date.js';

const BlogPostItem = ({imgUrl, content}) => {
  return(
    <>
      <div className='blog_post_item'>
        <div className='blog_post_item__img-wrapper'>
          <img className='blog_post_item__img' src={imgUrl} alt='post img'></img>
        </div>
        <div className='blog_post_item__content-wrapper'>
          <p className='blog_post_item__content'>{ content }</p>
          <div className='blog_post_item__date_wrapper'>
            <Date 
              classnameDate={'date-blog-posts'}
              classnameText={'date-blog-posts_text'}
            />
          </div>
        </div>
      </div>
    </>
  )
 };

export default BlogPostItem;
