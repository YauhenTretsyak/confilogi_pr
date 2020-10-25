import React from 'react';
import CommentItem from '../blocks/CommentItem/CommentItem.js';
import blogData from '../../data/Data.js';

const Comments = () => {

  const commentsData = blogData.comments;

  const answer = [
    { name: 'Anna' },
    {answerTime: '20 godzin temu'},
    { content: '@Anna Ale efekt! Świetnie wyglądasz, kochana! ' }
  ]

  const answerComment = answer.Name ? <CommentItem  /> : null;

  // const comment = commentsData.map((item, index) => {
  //   return(

  //   );
  // });

  return(
    <>
      <div className='comments-wrapper'>
        <CommentItem />
      </div>
    </>
  );
};

export default Comments;