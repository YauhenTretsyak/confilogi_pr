import React from 'react';

const BlogSearchHeader = ({ title, typeHeader }) => {
  return (
    <h3 className={`${typeHeader}__header`} >
      <div className={`${typeHeader}__span_wrapper`}>
        <span>
          { title }
        </span>
      </div>
    </h3>
  );
};

export default BlogSearchHeader;