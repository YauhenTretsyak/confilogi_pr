import React from 'react';
import Header from '../Header/Header.js';
import Blog from '../Blog/Blog.js';
import BlogPosts from '../BlogPosts/BlogPosts.js';
import Footer from '../Footer/Footer.js';

function App() {
  return (
    <>
      <Header />
      <div className="box_wrapper blog_wrapper" >
        <Blog />
        <BlogPosts />
      </div>
      <Footer/>
    </>
  );
}

export default App;
