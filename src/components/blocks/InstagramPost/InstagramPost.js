import React from 'react';
import menu from '../../../assets/instagram/menu.svg';
import like from '../../../assets/instagram/like.svg';
import save from '../../../assets/instagram/save.svg';
import share from '../../../assets/instagram/share.svg';
import comment from '../../../assets/instagram/comment.svg';

const InstagramPost = ({
  avatar,
  name,
  verified,
  followers,
  city,
  mainPhoto,
  numberOfLikes,
  text1,
  text2,
  postHashtags,
  numberOfComments,
}) => {
  return (
    <div className='instagram-post'>
      <header className='instagram-post__header'>
        <div className='instagram-post__header__flex'>
          <a className='instagram-post__header__link' href='/'>
            <img
              className='instagram-post__header__avatar'
              src={avatar}
              alt='instagram-avatar'
            />
          </a>
          <div>
            <a href='/' className='instagram-post__header__link'>
              <p className='instagram-post__header__name'>{name}</p>
            </a>
            {followers ? <p className='instagram-post__header__followers'>{followers}</p> : null}
            {city ? <p className='instagram-post__header__city'>{city}</p> : null}
          </div>
          {verified ? <img
              className='instagram-post__header__verified'
              src={verified}
              alt='instagram-verifed'
            ></img> : null}
        </div>
        <button className='instagram-post__header__menu'>
          <img
            className='instagram-post__header__menu__img'
            src={menu}
            alt='menu'
          />
        </button>
      </header>
      <img
        className='instagram-post__main-photo'
        src={mainPhoto}
        alt='instagram-main-img'
      />
      <div className='instagram-post__interactions'>
        <div>
          <img
            src={like}
            className='instagram-post__one-interaction instagram-post__like'
            alt='instagram-like'
          />
          <img
            src={share}
            className='instagram-post__one-interaction instagram-post__share'
            alt='instagram-share'
          />
          <img
            src={comment}
            className='instagram-post__one-interaction instagram-post__comment'
            alt='instagram-comment'
          />
        </div>
        <img
          src={save}
          className='instagram-post__one-interaction instagram-post__save'
          alt='instagram-save'
        />
      </div>
      <p className='instagram-post__number-of-likes'>
        Liczba polubień: {numberOfLikes}
      </p>
      <div className='instagram-post__content'>
        <span className='instagram-post__name'>{name}</span>
        <span className='instagram-post__text'>{text1}</span><br/>
        {text2 ? <p className='instagram-post__text instagram-post__text-2'>{text2}</p> : null}
      </div>
      <div className='instagram-post__hashtags'>
        {postHashtags.map((hashtag, index) => {
          return (
            <a className='instagram-post__one-hashtag' href='/' key={index}>
              {hashtag}
            </a>
          );
        })}
      </div>
      <p className='instagram-post__comments'>
        <a className='instagram-post__comments-link' href='/'>
          Zobacz wszystkie komentarze: {numberOfComments}
        </a>
      </p>
    </div>
  );
};

export default InstagramPost;
