import React from 'react';

const BlogPostItem = ({imgUrl, content}) => {
  return(
    <>
      <div className='blog_post_item'>
        <img src={imgUrl} alt='post img'></img>
        <div className='blog_post_item__content-wrapper'>
          <p>{ content }</p>
          {/* <Date /> */}
        </div>
      </div>
    </>
  )
 };

export default BlogPostItem;
