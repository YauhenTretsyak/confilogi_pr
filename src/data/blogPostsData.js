//** blogPostItem images */
import imgPostItem1 from '../assets/photo/aside-dzieki-tym.png';
import imgPostItem2 from '../assets/photo/aside-szokujace-wyznanie.png';
import imgPostItem3 from '../assets/photo/aside-poznaj-historie.png';

//** comercialItem images */
import comercialBanner1 from '../assets/photo/banner1.png';
import comercialBanner2 from '../assets/photo/banner2.png';

const blogPostsData = {
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
}

export default blogPostsData;