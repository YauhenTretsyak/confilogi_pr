import React from 'react';
import Button from '../Button/Button.js';

const CommentItem = ({ 
  authorName, 
  commentDate,
  commentContent,
  avatarImg,
  answerComment 
}) => {
  
  return(
    <>
      <div className='commentItem-wrapper' >
        <div className='commentItem__avatar'>
          <img 
            className='commentItem__avatar_img'  
            src={ avatarImg }
            alt='avatar'
          ></img>
        </div>

        <div className='commentItem__content-wrapper'>
          <div className='commentItem__name-wrapper'>
            <p className='commentItem__name'>{ authorName }</p>
            <p className='commentItem__date'>{ commentDate }</p>
          </div>
          
          <div className='commentItem__content'>
            <p className='commentItem__text'>{ commentContent }</p>
            <Button 
              text={ 'Odpowiedź' } 
              styleName={ 'commentItem__btn' }
              btnForm={ true }
            />
          </div>
          { answerComment }
        </div>
      </div>
    </>
  );
};

export default CommentItem;