import React from 'react';
import BlogHeader from '../blocks/BlogHeader/BlogHeader.js';


const BlogPosts = () => {
  return (
    <section className='blog_posts'>
      <BlogHeader 
        typeHeader={'blog_header'} 
        title={'Ostatnie posty'}
      />
    </section>
  )
};

export default BlogPosts;