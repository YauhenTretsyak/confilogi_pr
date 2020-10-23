import React from 'react';
import Button from '../blocks/Button/Button.js';
import Navigation from '../blocks/Navigation/Navigation.js';
import CommentForm from '../blocks/CommentForm/CommentForm.js';
import mainPhoto from '../../assets/photo/main-photo.png';
import Date from '../blocks/Date/Date.js';
import Author from '../blocks/Author/Author.js';
import Paragraph from '../blocks/Paragraph/Paragraph.js';
import quotation from '../../assets/svg/quatation-mark.svg';

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
        <span className='paragraph_pink-text'>TEJ</span> prostej metodzie z łatwością
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
        <span className='paragraph_pink-text-bold'>
          nieinwazyjna naturalna metoda!
        </span>
        Gdyby celebrytka nie przyznała tego sama, ciężko byłoby uwierzyć,{' '}
        <span className='paragraph_pink-text-bold'>
          że swoje nieziemskie krągłości zawdzięcza wyłącznie temu innowacyjnemu
          żelowi.
        </span>
      </Paragraph>
      <Paragraph>
        Ta wiadomość wstrząsnęła fanami. Niech każda z nas zada sobie pytanie –
        <span className='paragraph_text-bold'>
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
        Nasza redakcja na pewno powiedziałaby:{' '}
        <span className='paragraph_text-bold'>TAK!</span> A Wy jak, Kochane? ;)
      </Paragraph>
      <h2 className='blog_subtitle'>
        Sprawdźmy, gdzie tkwi sekret idealnych piersi
      </h2>
      <Paragraph>
        Kylie niedawno urodziła swoje pierwsze dziecko. Kiedy w formie lepszej
        niż sprzed ciąży pojawiła się na okładkach najbardziej znanych
        tabloidów, fani byli w szoku.{' '}
        <span className='paragraph_pink-text-bold'>
          Figura gwiazdy wyglądała idealnie – płaski brzuch, krągłe, jędrne
          pośladki i ten doskonały, WIELKI BIUST!
        </span>
      </Paragraph>
      <Paragraph>
        <span className='paragraph_text-bold'>Jak ona to zrobiła?</span>
      </Paragraph>
      <Paragraph>
        Gwiazda zdradziła swój sekret na Instagramie. Kylie nie wstydzi się
        mówić o metodzie, która sprawiła, że jej piersi wyglądają idealnie!
        Jeszcze niedawno wspominała też o wypełniaczach, dzięki którym jej usta
        wyglądają tak ponętnie i seksownie. Dzisiaj zdradza nam sekret swoich
        ponętnych krągłości.
      </Paragraph>
      <div className='quotation'>
        <img className='quotation_img' src={quotation} alt='' />
        <Paragraph>
          <span className='paragraph_text-italic'>
            Sekrety mojej sylwetki nie są żadną tajemnicą! Dementuję wszystkie
            plotki dotyczące tego, że miałam jakiekolwiek operacje plastyczne.
            Wszystko, co osiągnęłam w pracy nad sylwetką, udało mi się dokonać
            całkowicie naturalnymi metodami. W przypadku biustu i pośladków to
            właśnie ten żel w 1 miesiąc dodał im objętości. Sensual Shape to
            produkt w pełni naturalny [sprawdzaliśmy skład – zero chemii,
            wyłącznie naturalne składniki – red.], który poprzez stymulację
            tkanki tłuszczowej powiększa piersi i pośladki!
          </span>
        </Paragraph>
        <img className='quotation_img' src={quotation} alt='' />
      </div>
      <div>
        {/* <Instagram /> */}
      </div>
      <CommentForm/>
    </section>
  );
};

export default Blog;
