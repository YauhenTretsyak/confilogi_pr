//** blogPostItem images */
import imgPostItem1 from '../assets/photo/aside-dzieki-tym.png';
import imgPostItem2 from '../assets/photo/aside-szokujace-wyznanie.png';
import imgPostItem3 from '../assets/photo/aside-poznaj-historie.png';

//** comercialItem images */
import comercialBanner1 from '../assets/photo/banner1.png';
import comercialBanner2 from '../assets/photo/banner2.png';

//** comments avatars & images */
import avatarImg1 from '../assets/photo/testimonial-ania.png';
import avatarImg2 from '../assets/photo/testimonial-anette.png';
import avatarImg3 from '../assets/photo/testimonial-tekla89.png';

import commentImg1 from '../assets/photo/instagram-kylie-2.png';


const blogData = {
  //** BlogPosts */
  blogMainHeader: ['Ostatnie posty'],

  blogPostItem : [
    {
      imgUrl: imgPostItem1, 
      content: 'Dzięki tym prostym ćwiczeniom ujędrnisz pośladki zaledwie w 2 tygodnie!'
    },
    {
      imgUrl: imgPostItem2, 
      content: 'Szokujące wyznanie modelki plus size – byłam anorektyczką i nie miałam biustu do 25 roku życia.'
    },
    {
      imgUrl: imgPostItem3, 
      content: 'Poznaj historię czytelniczki, która szybko wróciła do formy'
    },
  ],

  blogSearchItem : [
    {
      title: 'Wyszukaj',
      placeHolderTitle: 'Wpisz frazę...',
      btnTitle: 'Szukaj',
      content: null,
    },
    {
      title: 'Newsletter',
      placeHolderTitle: 'Wpisz adres e-mail...',
      btnTitle: 'Zapisz',
      content:  'Bądź z nami na bieżąco! Zapisz się do newslettera. Codziennie nowe fakty z życia gwiazd!',
    },
  ],

  comercialItem : [
    {
      bgImage: comercialBanner1,
      btnTilte: 'Sprawdź',
      btnLink: '/',
      btnStyle: 'white',
    },
    {
      bgImage: comercialBanner2,
      btnTilte: 'Sprawdź',
      btnLink: '/',
      btnStyle: '',
    },
  ], 
  //** end BlogPosts */ 

  //**InstagramPosts*/




  //** Comments */
  commentForm : {
    commentArticle: ',,Wow! Niesamowity sekret Kylie..."',
    btnUploadImgLink: '/',
    btnUploadCommentLink: '/',
  },

  comments : [
    {
      authorName: 'Ania',
      avatarImg: avatarImg1,
      commentDate: '20 godzin temu',
      commentContent: 'O ja, ale efekty! Aż trudno uwierzyć, że Kylie osiągnęła to wszystko bez skalpela. :)',
      images: [],
      answer : null
    },
    {
      authorName: 'Annete',
      avatarImg: avatarImg2,
      commentDate: '20 godzin temu',
      commentContent: 'Minął miesiąc, odkąd skończyłam kurację tym żelem. Aż nie mogę w to uwierzyć, musiałam zmienić stanik z 75B na 75D! Zobaczcie, tu są moje zdjęcie sprzed i po kuracji.',
      images: [
        commentImg1,
        commentImg1
      ],
      answer : 
        {
          authorName: 'Tekla89',
          avatarImg: avatarImg3,
          commentDate: '20 godzin temu',
          commentContent: '@Anette Ale efekt! Świetnie wyglądasz, kochana! ',
        }
    },
  ],

};

export default blogData;
