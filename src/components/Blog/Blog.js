import React from 'react';
import Button from '../blocks/Button/Button.js';
import Navigation from '../blocks/Navigation/Navigation.js';
import mainPhoto from '../../assets/photo/main-photo.png';
import Date from '../blocks/Date/Date.js';
import Author from '../blocks/Author/Author.js';
import Paragraph from '../blocks/Paragraph/Paragraph.js';

const Blog = () => {
  return (
    <section className='blog'>
      <div className='blog_links'>
        <Navigation text={'Aktualności'} styleName={'blog_links_item'} /> /{' '}
        <Navigation text={'Przemiany gwiazd'} styleName={'blog_links_item'} /> /{' '}
        <span>"Wow! Niesamowity sekret Kylie..."</span>
      </div>
      <Button styleName='blog_btn' text='Przemiany gwiazd' />
      <div className='blog_info'>
        <Date />
        <Author />
      </div>
      <h1 className='blog_title'>
        Wow! Niesamowity sekret Kylie Jenner odkryty – dzięki{' '}
        <span className='pink-text'>TEJ</span> prostej metodzie z łatwością
        powiększysz i ujędrnisz biust oraz pośladki tak jak ona!
      </h1>
      <img className='blog_img' src={mainPhoto} alt='kylie-jenner'></img>
      <Paragraph>
        Słyszeliście już najnowsze ploteczki? Jedna z najbardziej znanych
        dwudziestolatek, gwiazda urodzona w najseksowniejszej rodzinie na
        świecie – Jenner-Kardashian – wyznała ostatnio coś zaskakującego.
        Okazuje się, że jej obfity, kształtny biust i pośladki nie są wynikiem
        genetyki, ani – co dziwniejsze – chirurgii plastycznej. Za te piękne,
        kobiece kształty odpowiada{' '}
        <span className='pink-text-bold'>nieinwazyjna naturalna metoda!</span>
        Gdyby celebrytka nie przyznała tego sama, ciężko byłoby uwierzyć,{' '}
        <span className='pink-text-bold'>
          że swoje nieziemskie krągłości zawdzięcza wyłącznie temu innowacyjnemu
          żelowi.
        </span>
      </Paragraph>
      <Paragraph>
        Ta wiadomość wstrząsnęła fanami. Niech każda z nas zada sobie pytanie –
        <span className='text-bold'>
          czy gdyby istniała możliwość poprawienia swoich walorów, bez wydawania
          dużej ilości pieniędzy, nie chciałybyśmy z niej skorzystać?
        </span>{' '}
        W końcu spełnić marzenie o idealnych krągłościach bez konieczności
        wydawania ogromnych ilości pieniędzy czy kładzenia się pod nóż
        operacyjny? Czy gdyby metody znane Kylie były dostępne na wyciągnięcie
        ręki – za pieniądze nieporównywalnie niskie w stosunku do operacji
        plastycznej – nie chciałybyśmy spróbować?
      </Paragraph>
      <Paragraph>
        Nasza redakcja na pewno powiedziałaby: <span className='text-bold'>TAK!</span> A Wy jak, Kochane? ;)
      </Paragraph>
    </section>
  );
};

export default Blog;
