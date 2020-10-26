import React from 'react';
import Button from '../Button/Button.js';

const CommentItem = ({ 
  authorName, 
  commentDate,
  commentContent,
  avatarImg,
  images,
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
            <div className='commentItem__info' >
              <p className='commentItem__text'>{ commentContent }</p>
              <div className='commentItem__content_img-wrapper'>
                { 
                  images ? images.map((item, index) => {
                    return(
                      <img 
                        key={index + 'uity669856hhf'}
                        src={ item }
                        className='commentItem__content_img'
                      ></img>
                    );
                  }) 
                  : null
                }
              </div>
            </div>
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