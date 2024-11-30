export interface Book {
    title: string;
    coverImage: string;
    series?: string;
    genre: string;
    description: string;
    amazonLink: string;
  }
  
  export const books: Record<string, Book> = {
    'a-cure-for-magic': {
      title: 'A Cure for Magic',
      coverImage: '/cure-for-magic.jpg',
      series: 'The Ardor Cycle Series',
      genre: 'Romantic Fantasy',
      description: 'Marika Cyran is destined to rule, if she survives her own power first.',
      amazonLink: 'https://www.amazon.com/Cure-Magic-Ardor-Cycle-Book-ebook/dp/B0CW1F23NK'
    },
    'sasquatch-summer': {
      title: 'Sasquatch Summer',
      coverImage: '/sasquatch-summer.jpg',
      series: 'Wild Wanderings Series',
      genre: 'Fantasy Romance',
      description: 'A hyperindependent PhD graduate, an impossible forest monster, and the irresistible attraction between them.',
      amazonLink: 'https://www.amazon.com/Sasquatch-Summer-Wild-Wanderings-Book-ebook/dp/B0C51ZFW3R'
    },
    'alder-king-spring': {
      title: 'Alder King Spring',
      coverImage: '/alder-king-spring.jpg',
      series: 'Wild Wanderings Series',
      genre: 'Fantasy Romance',
      description: 'As his curse’s deadline approaches, Kaspar and his beloved enchanted forest stand on the brink of doom.',
      amazonLink: 'https://www.amazon.com/Alder-King-Spring-Wild-Wanderings-ebook/dp/B0C51ZFW3R'
    }
  };