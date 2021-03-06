import React, { useState } from 'react';
import Button from '../Button/Button.js';
import blogData from '../../../data/commentsData.js';
import avatarDefault from '../../../assets/avatary/avatar.png';
import moment from 'moment';
import 'moment/locale/pl';

const CommentForm = ({ updateData }) => {

  const dataCommentForm = blogData.commentForm;
  const [dataInputName, setInputNameItem] = useState('');
  const [dataInputContent, setDataInputContent] = useState('');

  const getName = (e) => {
    setInputNameItem(e.target.value)
  };

  const getContent = (e) => {
    setDataInputContent(e.target.value)
  };

  const addComment = () => {
    if (dataInputName.length !== 0 && dataInputContent.length !== 0) {
      updateData({
        authorName: dataInputName,
        avatarImg: avatarDefault,
        commentDate: moment().format('D MMMM YYYY, hh:mm a'),
        commentContent: dataInputContent,
        images: [],
        answer : null
      })
      
      setInputNameItem('')
      setDataInputContent('')
    }
  }

  return(
    <>
      <div className='comment_form-wrapper'>
        <h2 className='comment_form__header' >Komentarze</h2>
        <p className='comment_form__article'>
          Czytaj komentarze do artykułu 
          <span>{ dataCommentForm.commentArticle }</span>
        </p>
        <p className='comment_form__text_registration'>
          Zarejestruj się lub zaloguj aby skomentować.
        </p>

        <div className='comment_form__login-wrapper'>
          <div className='comment_form__btn-wrapper'>
            <Button 
              text={'Zarejestruj się'} 
              styleName={'comment_form__btn comment_form__btn_light'}
              btnSpan={ true }
            />
            <Button 
              text={'Zaloguj się'} 
              styleName={'comment_form__btn'}
              btnSpan={ true }
            />
          </div>

          <span>lub</span>

          <a href='/' className='comment_form__social_link'>
            <svg id="Group_34" data-name="Group 34" xmlns="http://www.w3.org/2000/svg" width="49.734" height="49.734" viewBox="0 0 49.734 49.734">
              <path id="Path_32" data-name="Path 32" d="M0,24.867A24.867,24.867,0,1,1,24.867,49.734,24.867,24.867,0,0,1,0,24.867Z" fill="#3b5998"/>
              <path id="Path_33" data-name="Path 33" d="M26.794,39.055V25.526h3.735l.495-4.662h-4.23L26.8,18.53c0-1.216.116-1.868,1.862-1.868H31V12H27.262c-4.487,0-6.066,2.262-6.066,6.065v2.8H18.4v4.662h2.8V39.055Z" transform="translate(0.665 0.434)" fill="#fff"/>
            </svg>
          </a>

          <a href='/' className='comment_form__social_link'>
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="50" viewBox="0 0 49 50">
              <g id="Group_36" data-name="Group 36" transform="translate(-0.401)">
                <ellipse id="Ellipse_17" data-name="Ellipse 17" cx="24.5" cy="25" rx="24.5" ry="25" transform="translate(0.401 0)" fill="#55acee"/>
                <g id="Group_35" data-name="Group 35" transform="translate(11.127 15.084)">
                  <path id="Path_34" data-name="Path 34" d="M54.075,36.815a11.859,11.859,0,0,1-3.414.935,5.96,5.96,0,0,0,2.614-3.288A11.9,11.9,0,0,1,49.5,35.9a5.949,5.949,0,0,0-10.129,5.422,16.873,16.873,0,0,1-12.252-6.211,5.95,5.95,0,0,0,1.839,7.936,5.9,5.9,0,0,1-2.692-.744c0,.025,0,.051,0,.075a5.947,5.947,0,0,0,4.768,5.828,5.967,5.967,0,0,1-2.684.1A5.95,5.95,0,0,0,33.9,52.441,12,12,0,0,1,25.1,54.9a16.813,16.813,0,0,0,9.111,2.671c10.933,0,16.912-9.057,16.912-16.912q0-.386-.017-.769a12.054,12.054,0,0,0,2.966-3.076Z" transform="translate(-25.103 -34.028)" fill="#fff"/>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div className='comment_form'>
          <span>Nick</span>

          <input 
            onInput={ getName }
            value = { dataInputName }
            className="comment_form__user_name" 
            name="user_name" 
            type="text" 
          />

          <span>Treść</span>

          <textarea 
            onInput={ getContent }
            value={ dataInputContent }
            className="comment_form__user_msg" 
            name="user_message" 
            type="text"
          ></textarea>

          <div className='comment_form__bottom-wrapper'>
            <div className='comment_form__btn-wrapper add_btn-wrapper'>
              <div>
                <Button 
                  text={'Dodaj zdjęcie'} 
                  styleName={'comment_form__btn comment_form__btn_light add_btn'}
                  btnSpan={ true }
                />
              </div>
              <div onClick={ addComment }>
                <Button 
                  text={'Dodaj komentarz'} 
                  styleName={'comment_form__btn add_btn'}
                  btnSpan={ true }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default CommentForm;