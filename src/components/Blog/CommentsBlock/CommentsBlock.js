import React from 'react';
import CommentForm from '../../blocks/CommentForm/CommentForm';
import Comments from '../../Comments/Comments';

const CommentsBlock = () => {
  return(
    <>
      <CommentForm />
      <Comments />
    </>
  );
};

export default CommentsBlock;