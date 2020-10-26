import React from 'react';
import CommentItem from '../blocks/CommentItem/CommentItem.js';

const Comments = ({ commentsData }) => {
  
  const comment = commentsData.map((item, index) => {
    return(
      <CommentItem 
        key={ index + 'gf8566ebhf66su' }
        authorName={ item.authorName } 
        commentDate={ item.commentDate }
        commentContent={ item.commentContent }
        avatarImg={ item.avatarImg }
        images={item.images}
        answerComment={ 
          item.answer 
          ? <CommentItem  
              key={ index + 'gf85khj767su' }
              authorName={ item.answer.authorName } 
              commentDate={ item.answer.commentDate }
              commentContent={ item.answer.commentContent }
              avatarImg={ item.answer.avatarImg }
              images={item.answer.images}
            /> 
          : null 
        }
      />
    );
  });

  return(
    <>
      <div className='comments-wrapper'>
        { comment }
      </div>
    </>
  );
};

export default Comments;