import avatar1 from '../assets/instagram/avatar-moniiis.png';
import avatar2 from '../assets/instagram/avatar-lovelykarola26.png';
import mainPhoto1 from '../assets/photo/instagram-moniiis.png';
import mainPhoto2 from '../assets/photo/instagram-lovely.png';

const blogData = {
  navigationLinks: [
    'Aktualności',
    'Zdrowie',
    'Lifestyle',
    'Uroda',
    'Moda',
    'Horoskop',
  ],
  author: 'Karolina Marczyk',
  blogPostsTitles: {
    mainTitle: 'Ostatnie posty',
  },
  blogPostsForms: {},
  footerLinks: ['Polityka prywatności', 'Mapa strony', 'Cookies'],
  instagramSection: [
    {
      avatar: avatar1,
      name: 'moniiis',
      city: 'Cracow',
      mainPhoto: mainPhoto1,
      numberOfLikes: '851',
      text:
        'Minęły 2 miesiące odkąd przestałam karmić piersią! Przyznam, że po porodzie mój biust nie był w najlepszym stanie. A teraz – jest idealnie jędrny, wygląda lepiej, niż wcześniej. Same zobaczcie! 😊',
      postHashtags: [
        '#smile',
        '#happymom',
        '#happy',
        '#cutebody',
        '#bodybuilding',
      ],
      numberOfComments: '126',
    },
    {
      avatar: avatar2,
      name: 'lovelykarola26',
      city: 'Warszawa',
      mainPhoto: mainPhoto2,
      numberOfLikes: '1016',
      text:
        'Chyba w końcu czuję się ze sobą świetnie! To tylko miesiąc, a ja wiem, że zniknęły wszystkie moje kompleksy. :D A wszystko dzięki Sensual Shape. Życie jest cudowne! PS. Kochane, uważajcie na podróbki – zamówiłam ten żel z oryginalnej strony producenta! Tylko tam dostaniecie pewny produkt, który naprawdę działa.',
      postHashtags: [
        '#smile',
        '#polishgirl',
        '#loveyourlife',
        '#happiness',
        '#wellness',
      ],
      numberOfComments: '813',
    },
  ],
};

export default blogData;
