import React from 'react';
import BlogHeader from '../blocks/BlogHeader/BlogHeader.js';
import BlogPostItem from '../blocks/BlogPostItem/BlogPostItem.js'
import imgTestLink from '../../assets/photo/aside-dzieki-tym.png'


const BlogPosts = () => {

  const testContent = 'Dzięki tym prostym ćwiczeniom ujędrnisz pośladki zaledwie w 2 tygodnie!'

  return (
    <section className='blog_posts'>
      <BlogHeader 
        title={'Ostatnie posty'}
      />
      <BlogPostItem imgUrl={ imgTestLink } content={ testContent } />
      <BlogPostItem imgUrl={ imgTestLink } content={ testContent } />
      <BlogPostItem imgUrl={ imgTestLink } content={ testContent } />

    </section>
  )
};

export default BlogPosts;