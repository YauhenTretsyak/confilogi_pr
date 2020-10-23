import React from 'react';
import Button from '../blocks/Button/Button.js';
import Navigation from '../blocks/Navigation/Navigation.js';
import mainPhoto from '../../assets/photo/main-photo.png';
import Date from '../blocks/Date/Date.js';
import Author from '../blocks/Author/Author.js';
import Paragraph from '../blocks/Paragraph/Paragraph.js';
import quotation from '../../assets/svg/quatation-mark.svg';
import InstagramPost from '../blocks/InstagramPost/InstagramPost.js';
import avatar1 from '../../assets/instagram/avatar-kylie.png';
import verified from '../../assets/instagram/blue-check.svg';
import photo1 from '../../assets/photo/instagram-kylie.png';
import photo2 from '../../assets/photo/instagram-kylie-2.png';
import data from '../../data/Data.js';

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
        <span className='paragraph_pink-text'>TEJ</span> prostej metodzie z
        łatwością powiększysz i ujędrnisz biust oraz pośladki tak jak ona!
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
      <div className='instagram-posts-wrapper'>
        <InstagramPost
          avatar={avatar1}
          name={'kyliejenner'}
          verified={verified}
          followers={'197,9 mln obserwujących'}
          mainPhoto={photo1}
          numberOfLikes={'10 001 587'}
          text={
            "The secret of my perfect body is not a secret at all! I deny all rumors that I've ever had any plastic surgery. Everything that I achieved, I achieved by using only natural methods. My breasts and buttocks look like this because I've been using this gel for one month. Sensual Shape is completely natural product that naturally enlarges all the curves by increasing the fat cells!"
          }
          postHashtags={[
            '#body',
            '#bust',
            '#happy',
            ' #cutebody',
            '#bodybuilding',
            '#love',
          ]}
          numberOfComments={'12 tys.'}
        />
        <Paragraph>
          Niestety, ze względu na burzę, jaką wywołała ta wiadomość wśród
          chirurgów plastycznych, post gwiazdy ZOSTAŁ USUNIĘTY!!! Jak podają
          zagraniczne media,{' '}
          <span className='paragraph_text-bold'>
            konto Kylie zostało zhakowane
          </span>{' '}
          w wyniku spisku klinik medycyny estetycznej, które za wszelką cenę
          chcą ukryć informację o nowym naturalnym żelu powiększającym piersi.
          Na szczęście nasze fantastyczne{' '}
          <span className='paragraph_text-bold'>
            koleżanki z redakcji zdążyły wcześniej pobrać post,
          </span>{' '}
          który wrzuciliśmy specjalnie dla Was!
        </Paragraph>
        <InstagramPost
          avatar={avatar1}
          name={'kyliejenner'}
          followers={'197,9 mln obserwujących'}
          verified={verified}
          mainPhoto={photo2}
          numberOfLikes={'8 521 507'}
          text={
            "This is the secret of my look. Try it yourself, it's worth it!"
          }
          postHashtags={[
            '#curves',
            ' #celebrity',
            '#star',
            '#beauty',
            '#breast',
            '#pretty',
          ]}
          numberOfComments={'7,6 tys.'}
        />
      </div>
      <Paragraph>
        Ta formuła to prawdziwy hit na rynku! Zawiera fitoestrogeny, które w
        zupełnie naturalny sposób{' '}
        <span className='paragraph_pink-text-bold'>
          powiększają biust o 3 rozmiary w zaledwie miesiąc!
        </span>{' '}
        Cały świat dosłownie oszalał na jego punkcie. Jak się okazało, produkt
        od niedawna dostępny jest też w Polsce, a Instagram aż kipi od Waszych
        cudownych zdjęć przed i po! &hearts;
      </Paragraph>
      <div className='instagram-posts-wrapper'>
        {data.instagramSection.map((instagramPost) => {
          return (
            <InstagramPost
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
        <span className='paragraph_text-bold'>
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
    </section>
  );
};

export default Blog;
