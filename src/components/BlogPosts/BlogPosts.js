import React from 'react';
import BlogHeader from '../blocks/BlogHeader/BlogHeader.js';
import BlogPostItem from '../blocks/BlogPostItem/BlogPostItem.js';
import BlogSearchItem from '../blocks/BlogSearchItem/BlogSearchItem.js';

import imgTestLink from '../../assets/photo/aside-dzieki-tym.png';
import imgTestLink2 from '../../assets/photo/aside-szokujace-wyznanie.png';
import imgTestLink3 from '../../assets/photo/aside-poznaj-historie.png';


const BlogPosts = () => {

  const testContent = 'Dzięki tym prostym ćwiczeniom ujędrnisz pośladki zaledwie w 2 tygodnie!';
  const testContent2 = 'Szokujące wyznanie modelki plus size – byłam anorektyczką i nie miałam biustu do 25 roku życia.';
  const testContent3 = 'Poznaj historię czytelniczki, która szybko wróciła do formy';
  const testContentSearch = 'Bądź z nami na bieżąco! Zapisz się do newslettera. Codziennie nowe fakty z życia gwiazd!'

  return (
    <section className='blog_posts'>
      <BlogHeader 
        title={'Ostatnie posty'}
      />
      <BlogPostItem imgUrl={ imgTestLink } content={ testContent } />
      <BlogPostItem imgUrl={ imgTestLink2 } content={ testContent2 } />
      <BlogPostItem imgUrl={ imgTestLink3 } content={ testContent3 } />

      <BlogSearchItem 
        title={'Wyszukaj'}
        placeHolderTitle={'Wpisz frazę...'}
        btnTitle={'Szukaj'}
      />
      <BlogSearchItem 
        title={'Newsletter'} 
        placeHolderTitle={'Wpisz adres e-mail...'}
        btnTitle={'Zapisz'}
        content={ testContentSearch }
      />

    </section>
  )
};

export default BlogPosts;