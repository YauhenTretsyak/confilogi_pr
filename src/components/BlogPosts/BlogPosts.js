import React from 'react';
import BlogHeader from '../blocks/BlogHeader/BlogHeader.js';
import BlogPostItem from '../blocks/BlogPostItem/BlogPostItem.js'
import imgTestLink from '../../assets/photo/aside-dzieki-tym.png'


const BlogPosts = () => {
  return (
    <section className='blog_posts'>
      <BlogHeader 
        typeHeader={'blog_header'} 
        title={'Ostatnie posty'}
      />
      <BlogPostItem imgUrl={ imgTestLink } />
    </section>
  )
};

export default BlogPosts;