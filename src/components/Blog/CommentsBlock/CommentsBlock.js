import React, { useEffect, useState } from 'react';
import CommentForm from '../../blocks/CommentForm/CommentForm';
import Comments from '../../Comments/Comments';
import blogData from '../../../data/commentsData.js';

const CommentsBlock = () => {

  const [commentsData, setCommentsData ] = useState(JSON.parse(window.localStorage.getItem('comments')) || blogData.comments);

  const update = (comment) => {
    let tempArr = [...commentsData]
        tempArr.unshift(comment)
        setCommentsData(tempArr)
  }

  useEffect(()=>{
    window.localStorage.setItem('comments', JSON.stringify(commentsData));
    return (
      () => {
        window.localStorage.removeItem('comments')
      }
    )
  }, [commentsData]);

  return(
    <>
      <CommentForm 
        updateData={ update }
      />
      <Comments
        commentsData={ commentsData }
      />
    </>
  );
};

export default CommentsBlock;