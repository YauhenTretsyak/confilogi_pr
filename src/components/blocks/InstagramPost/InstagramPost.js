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
  text,
  postHashtags,
  numberOfComments,
}) => {
  console.log(postHashtags);
  return (
    <div className='instagram-post'>
      <header className='instagram-post_header'>
        <div className='instagram-post_header_flex'>
          <a className='instagram-post_header_link' href='/'>
            <img
              className='instagram-post_header_avatar'
              src={avatar}
              alt='instagram-avatar'
            />
          </a>
          <div>
            <a href='/' className='instagram-post_header_link'>
              <p className='instagram-post_header_name'>{name}</p>
            </a>
            <p className='instagram-post_header_followers'>{followers ? followers : ''}</p>
            <p className='instagram-post_header_city'>{city ? city : ''}</p>
          </div>
          {verified ? <img
              className='instagram-post_header_verified'
              src={verified}
              alt='instagram-verifed'
            ></img> : null}
        </div>
        <button className='instagram-post_header_menu'>
          <img
            className='instagram-post_header_menu_img'
            src={menu}
            alt='menu'
          />
        </button>
      </header>
      <img
        className='instagram-post_main-photo'
        src={mainPhoto}
        alt='instagram-main-img'
      />
      <div className='instagram-post_interactions'>
        <div>
          <img
            src={like}
            className='instagram-post_one-interaction instagram-post_like'
            alt='instagram-like'
          />
          <img
            src={share}
            className='instagram-post_one-interaction instagram-post_share'
            alt='instagram-share'
          />
          <img
            src={comment}
            className='instagram-post_one-interaction instagram-post_comment'
            alt='instagram-comment'
          />
        </div>
        <img
          src={save}
          className='instagram-post_one-interaction instagram-post_save'
          alt='instagram-save'
        />
      </div>
      <p className='instagram-post_number-of-likes'>
        Liczba polubień: {numberOfLikes}
      </p>
      <div className='instagram-post_content'>
        <span className='instagram-post_name'>{name}</span>
        <span className='instagram-post_text'>{text}</span>
      </div>
      <div className='instagram-post_hashtags'>
        {postHashtags.map((hashtag, index) => {
          return (
            <a className='instagram-post_one-hashtag' href='/' key={index}>
              {hashtag}
            </a>
          );
        })}
      </div>
      <p className='instagram-post_comments'>
        <a className='instagram-post_comments-link' href='/'>
          Zobacz wszystkie komentarze: {numberOfComments}
        </a>
      </p>
    </div>
  );
};

export default InstagramPost;
