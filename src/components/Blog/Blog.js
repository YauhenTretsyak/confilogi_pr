import React, { useState, useEffect } from 'react';

import Button from '../blocks/Button/Button.js';
import Navigation from '../blocks/Navigation/Navigation.js';
import CommentsBlock from './CommentsBlock/CommentsBlock.js';
import Date from '../blocks/Date/Date.js';
import Author from '../blocks/Author/Author.js';
import Paragraph from '../blocks/Paragraph/Paragraph.js';
import InstagramPost from '../blocks/InstagramPost/InstagramPost.js';
import Comercial from '../blocks/Comercial/Comercial.js';

import mainPhoto from '../../assets/photo/main-photo.png';
import quotation from '../../assets/svg/quatation-mark.svg';

import banner3 from '../../assets/photo/banner3.png';
import banner4 from '../../assets/photo/banner4.png';

import data from '../../data/Data.js';
import Promotion from '../blocks/Promotion/Promotion.js';


//dodac text1, text2  w instagramPost

const Blog = () => {
  const [isTablet, setTablet] = useState(window.innerWidth > 625);

  const updateMedia = () => {
    setTablet(window.innerWidth > 625);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <section className='blog'>
      <div className='blog__links'>
        <Navigation text={'Aktualności'} styleName={'blog__links__item'} /> /{' '}
        <Navigation text={'Przemiany gwiazd'} styleName={'blog__links__item'} />{' '}
        / <span>"Wow! Niesamowity sekret Kylie..."</span>
      </div>
      <Button styleName='blog_btn' btnLink='/' text='Przemiany gwiazd' />
      <div className='blog__info'>
        <Date />
        <Author />
      </div>
      <h1 className='blog__title'>
        Wow! Niesamowity sekret Kylie Jenner odkryty – dzięki{' '}
        <span className='paragraph__text-pink'>TEJ</span> prostej metodzie z
        łatwością powiększysz i ujędrnisz biust oraz pośladki tak jak ona!
      </h1>
      <img className='blog__img' src={mainPhoto} alt='kylie-jenner'></img>
      <Paragraph>
        Słyszeliście już najnowsze ploteczki? Jedna z najbardziej znanych
        dwudziestolatek, gwiazda urodzona w najseksowniejszej rodzinie na
        świecie – Jenner-Kardashian – wyznała ostatnio coś zaskakującego.
        Okazuje się, że jej obfity, kształtny biust i pośladki nie są wynikiem
        genetyki, ani – co dziwniejsze – chirurgii plastycznej. Za te piękne,
        kobiece kształty odpowiada{' '}
        <span className='paragraph__text-pink-bold'>
          nieinwazyjna naturalna metoda!
        </span>
        Gdyby celebrytka nie przyznała tego sama, ciężko byłoby uwierzyć,{' '}
        <span className='paragraph__text-pink-bold'>
          że swoje nieziemskie krągłości zawdzięcza wyłącznie temu innowacyjnemu
          żelowi.
        </span>
      </Paragraph>
      <Paragraph>
        Ta wiadomość wstrząsnęła fanami. Niech każda z nas zada sobie pytanie –
        <span className='paragraph__text-bold'>
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
        <span className='paragraph__text-bold'>TAK!</span> A Wy jak, Kochane? ;)
      </Paragraph>
      <h2 className='blog__subtitle'>
        Sprawdźmy, gdzie tkwi sekret idealnych piersi
      </h2>
      <Paragraph>
        Kylie niedawno urodziła swoje pierwsze dziecko. Kiedy w formie lepszej
        niż sprzed ciąży pojawiła się na okładkach najbardziej znanych
        tabloidów, fani byli w szoku.{' '}
        <span className='paragraph__text-pink-bold'>
          Figura gwiazdy wyglądała idealnie – płaski brzuch, krągłe, jędrne
          pośladki i ten doskonały, WIELKI BIUST!
        </span>
      </Paragraph>
      <Paragraph>
        <span className='paragraph__text-bold'>Jak ona to zrobiła?</span>
      </Paragraph>
      <Paragraph>
        Gwiazda zdradziła swój sekret na Instagramie. Kylie nie wstydzi się
        mówić o metodzie, która sprawiła, że jej piersi wyglądają idealnie!
        Jeszcze niedawno wspominała też o wypełniaczach, dzięki którym jej usta
        wyglądają tak ponętnie i seksownie. Dzisiaj zdradza nam sekret swoich
        ponętnych krągłości.
      </Paragraph>
      <div className='quotation'>
        <img className='quotation__img' src={quotation} alt='' />
        <Paragraph>
          <span className='paragraph__text-italic'>
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
        <img className='quotation__img' src={quotation} alt='' />
      </div>
      <div className='instagram-posts-wrapper'>
        <InstagramPost
          avatar={data.instagramPost1.avatar}
          name={data.instagramPost1.name}
          verified={data.instagramPost1.verified}
          followers={data.instagramPost1.followers}
          mainPhoto={data.instagramPost1.mainPhoto}
          numberOfLikes={data.instagramPost1.numberOfLikes}
          text={data.instagramPost1.text}
          postHashtags={data.instagramPost1.postHashtags}
          numberOfComments={data.instagramPost1.numberOfComments}
        />
        <Paragraph>
          Niestety, ze względu na burzę, jaką wywołała ta wiadomość wśród
          chirurgów plastycznych, post gwiazdy ZOSTAŁ USUNIĘTY!!! Jak podają
          zagraniczne media,{' '}
          <span className='paragraph__text-bold'>
            konto Kylie zostało zhakowane
          </span>{' '}
          w wyniku spisku klinik medycyny estetycznej, które za wszelką cenę
          chcą ukryć informację o nowym naturalnym żelu powiększającym piersi.
          Na szczęście nasze fantastyczne{' '}
          <span className='paragraph__text-bold'>
            koleżanki z redakcji zdążyły wcześniej pobrać post,
          </span>{' '}
          który wrzuciliśmy specjalnie dla Was!
        </Paragraph>
        <InstagramPost
          avatar={data.instagramPost2.avatar}
          name={data.instagramPost2.name}
          verified={data.instagramPost2.verified}
          followers={data.instagramPost2.followers}
          mainPhoto={data.instagramPost2.mainPhoto}
          numberOfLikes={data.instagramPost2.numberOfLikes}
          text={data.instagramPost2.text}
          postHashtags={data.instagramPost2.postHashtags}
          numberOfComments={data.instagramPost2.numberOfComments}
        />
      </div>
      <Paragraph>
        Ta formuła to prawdziwy hit na rynku! Zawiera fitoestrogeny, które w
        zupełnie naturalny sposób{' '}
        <span className='paragraph__text-pink-bold'>
          powiększają biust o 3 rozmiary w zaledwie miesiąc!
        </span>{' '}
        Cały świat dosłownie oszalał na jego punkcie. Jak się okazało, produkt
        od niedawna dostępny jest też w Polsce, a Instagram aż kipi od Waszych
        cudownych zdjęć przed i po! &hearts;
      </Paragraph>
      <div className='instagram-posts-wrapper'>
        {data.instagramSection.map((instagramPost, index) => {
          return (
            <InstagramPost
              key={index + 'yu545nvbskj664bvs'}
              avatar={instagramPost.avatar}
              name={instagramPost.name}
              city={instagramPost.city}
              mainPhoto={instagramPost.mainPhoto}
              numberOfLikes={instagramPost.numberOfLikes}
              text={instagramPost.text}
              postHashtags={instagramPost.postHashtags}
              numberOfComments={instagramPost.numberOfComments}
            />
          );
        })}
      </div>
      <Paragraph>
        Nasza redakcja zawsze wnikliwie sprawdza skład, gdy słyszy o konkretnych
        nowościach – dlatego chcieliśmy się dowiedzieć, co takiego niesamowitego
        kryje się w Sensual Shape, który stał się HITEM. Okazuje się, że to
        całkowicie naturalny środek, który stymuluje tkankę tłuszczową i
        ujędrnia miejsca w obszarach, na które pozostaje zaaplikowany. Dzięki
        regularnemu stosowaniu i aplikacji,{' '}
        <span className='paragraph__text-bold'>
          piersi wzrastają nawet o 3 rozmiary w zaledwie 1 miesiąc, a pupa
          powiększa się i zaokrągla identycznie, jak u wszystkich Kardashianek!
        </span>
      </Paragraph>
      <Paragraph>
        Ploteczki donoszą, że używają jej też inne gwiazdy, które mogą pochwalić
        się świetnymi krągłościami, takie jak Jennifer Lopez, Jennifer Aniston i
        Mila Kunis.
      </Paragraph>
      <Paragraph>
        My też zamówiłyśmy ten żel i na pewno podzielimy się z Wami efektami w
        kolejnych artykułach. Wiemy już, gdzie można go kupić – na tej stronie
        możecie otrzymać go ze specjalną zniżką!
      </Paragraph>
      {
        <>
          {isTablet ? (
            <Comercial
              blogWide={true}
              bgImage={banner4}
              btnTilte={'Kliknij i sprawdź'}
            />
          ) : (
            <Comercial
              blogSmall={true}
              bgImage={banner3}
              btnTilte={'Sprawdź!'}
            />
          )}
        </>
      }
      <div className='promotion-wrapper'>
        <Promotion>
          <span className='promotion__text-italic'>
            Kliknij w baner powyżej i zamów żel sensual shape ze zniżką 70%!
          </span>
        </Promotion>
        <Paragraph>
          Ilość produktów objętych promocją jest ograniczona. Zamów Sensual
          Shape i uzyskaj idealne ciało zaledwie w jeden miesiąc!
        </Paragraph>
        <Promotion>
          <span className='promotion__text-underline'>
            Tylko na tej stronie możesz zamówić oryginalny certyfikowany produkt
            ze specjalną zniżką!
          </span>
        </Promotion>
        <Paragraph>
          <span className='paragraph__text-bold'>UWAGA!</span> Naszej redakcji
          udało się dotrzeć do producenta oryginalnego żelu i otrzymać specjalną
          zniżkę <span className='paragraph__text-bold'>– 70%</span> dla
          czytelników! Jednak musicie się pospieszyć – ilość produktów objętych
          promocją jest ograniczona.
          Mamy tylko <span className='paragraph__text-bold'>200 sztuk!</span>
        </Paragraph>
      </div>
      <CommentsBlock />
    </section>
  );
};

export default Blog;
