import React from 'react';
import Header from '../Header/Header.js';
import Blog from '../Blog/Blog.js';
import BlogPosts from '../BlogPosts/BlogPosts.js';

function App() {
  return (
    <>
      <Header />
      <div className="blog_wrapper" >
        <Blog>

        </Blog>
        <BlogPosts>

        </BlogPosts>
      </div>
      <Footer/>
    </>
  );
}

export default App;
