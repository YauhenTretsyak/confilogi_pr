import React from 'react';

const BlogSearchHeader = ({ title }) => {
  return (
    <h3 className='blog_search__header' >
      <div className='blog_search__span_wrapper'>
        <span>
          { title }
        </span>
      </div>
    </h3>
  );
};

export default BlogSearchHeader;