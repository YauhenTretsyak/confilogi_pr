import React from 'react';

const BlogSearchHeader = ({ title }) => {
  return (
    <h3 className='blog_search__header'>
      <span>
        { title }
        Ostatnie posty
      </span>
    </h3>
  );
};

export default BlogSearchHeader;