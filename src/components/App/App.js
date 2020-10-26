import React from 'react';
import Header from '../Header/Header.js';
import Blog from '../Blog/Blog.js';
import BlogPosts from '../BlogPosts/BlogPosts.js';
import Footer from '../Footer/Footer.js';
import HelmetComponent from '../HelmetComponent/HelmetComponent.js';
import favicon from '../../assets/favicon.ico';

function App() {
  return (
    <>
      <HelmetComponent 
        title={ 'Shine Like a Star' }
        name={ 'Shine Like a Star' }
        content={ 'Shine Like a Star' }
        faviconUrl={ favicon }
      />
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
