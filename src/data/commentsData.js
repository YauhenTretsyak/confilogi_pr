import avatarImg1 from '../assets/photo/testimonial-ania.png';
import avatarImg2 from '../assets/photo/testimonial-anette.png';
import avatarImg3 from '../assets/photo/testimonial-tekla89.png';

import commentImg1 from '../assets/photo/instagram-kylie-2.png';

const commentsData = {
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
}

export default commentsData;