import avatar1 from '../assets/instagram/avatar-kylie.png';
import avatar2 from '../assets/instagram/avatar-moniiis.png';
import avatar3 from '../assets/instagram/avatar-lovelykarola26.png';
import mainPhoto1 from '../assets/photo/instagram-kylie.png';
import mainPhoto2 from '../assets/photo/instagram-kylie-2.png';
import mainPhoto3 from '../assets/photo/instagram-moniiis.png';
import mainPhoto4 from '../assets/photo/instagram-lovely.png';
import verified from '../assets/instagram/blue-check.svg';

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
  instagramPost1: {
    avatar: avatar1,
    name: 'kyliejenner',
    verified: verified,
    followers:'197,9 mln obserwujących',
    mainPhoto: mainPhoto1,
    numberOfLikes: '10 001 587',
    text:
      "The secret of my perfect body is not a secret at all! I deny all rumors that I've ever had any plastic surgery. Everything that I achieved, I achieved by using only natural methods. My breasts and buttocks look like this because I've been using this gel for one month. Sensual Shape is completely natural product that naturally enlarges all the curves by increasing the fat cells!",
    postHashtags: [
      '#body',
      '#bust',
      '#happy',
      ' #cutebody',
      '#bodybuilding',
      '#love',
    ],
    numberOfComments: '126',
  },
  instagramPost2: {
    avatar: avatar1,
    name: 'kyliejenner',
    verified: verified,
    followers:'197,9 mln obserwujących',
    mainPhoto: mainPhoto2,
    numberOfLikes: '8 521 507',
    text:
    "This is the secret of my look. Try it yourself, it's worth it!",
    postHashtags: [
      '#curves',
      ' #celebrity',
      '#star',
      '#beauty',
      '#breast',
      '#pretty',
    ],
    numberOfComments: '7,6 tys.',
  },
  instagramSection: [
    {
      avatar: avatar2,
      name: 'moniiis',
      city: 'Cracow',
      mainPhoto: mainPhoto3,
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
      numberOfComments: '12 tys.',
    },
    {
      avatar: avatar3,
      name: 'lovelykarola26',
      city: 'Warszawa',
      mainPhoto: mainPhoto4,
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
