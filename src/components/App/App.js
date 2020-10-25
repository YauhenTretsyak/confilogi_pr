import React from 'react';
import Header from '../Header/Header.js';
import Blog from '../Blog/Blog.js';
import BlogPosts from '../BlogPosts/BlogPosts.js';
import Footer from '../Footer/Footer.js';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Shine Like a Star</title>
        <meta charSet="utf-8" />
        <meta name='Shine Like a Star' content='Shine Like a Star' />
        <link rel='icon' type='image/png' href='favicon.ico' sizes='16x16' />
      </Helmet>
      <Header />
      <div className='box_wrapper blog_wrapper'>
        <Blog />
        <BlogPosts />
      </div>
      <Footer />
    </>
  );
}

export default App;