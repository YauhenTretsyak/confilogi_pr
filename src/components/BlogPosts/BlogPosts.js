import React from 'react';
import BlogHeader from '../blocks/BlogHeader/BlogHeader.js';
import BlogPostItem from '../blocks/BlogPostItem/BlogPostItem.js';
import BlogSearchItem from '../blocks/BlogSearchItem/BlogSearchItem.js';
import Comercial from '../blocks/Comercial/Comercial.js';
import blogData from '../../data/Data.js';

const BlogPosts = () => {

  const dataMainBlogHeader = blogData.blogMainHeader;
  const dataPostItem = blogData.blogPostItem;
  const dataComercialItem = blogData.comercialItem;
  const dataBlogSearch = blogData.blogSearchItem;

  const postItem = dataPostItem.map((item, index) => {
    return(
      <BlogPostItem 
        key={ index + 'odnvgfganjg234i' }
        imgUrl={ item.imgUrl } 
        content={ item.content } 
      />
    );
  });

  const comercialItem = dataComercialItem.map((item, index) => {
    return(
      <Comercial 
        key={ index + 'apmmndxv65wfvv5' }
        bgImage={ item.bgImage }
        btnTilte={ item.btnTilte }
        btnLink={ item.btnLink }
        btnStyle = { item.btnStyle }
      />
    );
  });

  const blogSearch = dataBlogSearch.map((item, index) => {
    return(
      <BlogSearchItem 
        key={ index + 'kh45bnva823bv' }
        title={ item.title }
        placeHolderTitle={ item.placeHolderTitle }
        btnTitle={ item.btnTitle }
        content={ item.content }
      />
    );
  });

  return (
    <section className='blog_posts'>
      <BlogHeader title={ dataMainBlogHeader } />
      { postItem }
      { blogSearch }
      <div className='blog_post__comercial-wrapper'>
        { comercialItem }
      </div>
    </section>
  )
};

export default BlogPosts;