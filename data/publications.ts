export interface Publication {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  coverUrl: string;
  publisher: {
    zh: string;
    en: string;
  };
  author: {
    zh: string;
    en: string;
  };
  publishDate: string;
  format: {
    zh: string;
    en: string;
  };
  printRun: {
    zh: string;
    en: string;
  };
  category: {
    zh: string;
    en: string;
  };
  price: string;
  isbn: string;
  summary: {
    zh: string;
    en: string;
  };
}

export const publications: Publication[] = [
  {
    id: '001',
    title: {
      zh: '中国设计批评：城市的表情',
      en: 'Chinese Design Criticism: The Expression of Cities',
    },
    coverUrl: 'https://picsum.photos/seed/book001/400/500',
    publisher: {
      zh: '湖南美术出版社',
      en: 'Hunan Fine Arts Publishing House',
    },
    author: {
      zh: '郗海飞',
      en: 'Xi Haifei',
    },
    publishDate: '2006.06',
    format: {
      zh: '16开',
      en: '16mo',
    },
    printRun: {
      zh: '2006年6月第一次',
      en: 'First printing, June 2006',
    },
    category: {
      zh: '广告设计',
      en: 'Advertising Design',
    },
    price: '98.00',
    isbn: '7-5356-2453-7',
    summary: {
      zh: '16开372页，大量图版，部分彩版。图文并茂。\n\n本书是一本专题文选性的著述，对当下中国城市文化的发展，是一项重要的、有益的选题。它涉及面广，具有明确的针对性和宏观通达的大视野，有很高的审美品格与品评水准，坦诚地抒发了艺术家的真知灼见。同时，本书的可读性很强，既有尖锐的评论，也有深入浅出的分析。',
      en: '16mo format, 372 pages, with numerous illustrations, some in color. Richly illustrated with text.\n\nThis book is a thematic anthology that addresses the development of contemporary Chinese urban culture, presenting an important and beneficial topic. It covers a wide range of subjects with clear focus and broad vision, demonstrating high aesthetic standards and critical insights. The author candidly expresses the artist\'s genuine perspectives. The book is highly readable, featuring both sharp criticism and accessible analysis.',
    },
  },
  {
    id: '002',
    title: {
      zh: '水彩的魅力',
      en: 'The Charm of Watercolor',
    },
    coverUrl: 'https://picsum.photos/seed/book002/400/500',
    publisher: {
      zh: '人民美术出版社',
      en: 'People\'s Fine Arts Publishing House',
    },
    author: {
      zh: '郗海飞',
      en: 'Xi Haifei',
    },
    publishDate: '2010.03',
    format: {
      zh: '8开',
      en: '8vo',
    },
    printRun: {
      zh: '2010年3月第一次',
      en: 'First printing, March 2010',
    },
    category: {
      zh: '艺术技法',
      en: 'Art Techniques',
    },
    price: '128.00',
    isbn: '978-7-102-05123-4',
    summary: {
      zh: '本书系统介绍了水彩画的基本技法与创作理念，收录了作者多年来的代表作品及创作心得。书中详细讲解了水彩画的材料选择、色彩运用、构图技巧等内容，适合各层次的水彩爱好者学习参考。',
      en: 'This book systematically introduces the basic techniques and creative concepts of watercolor painting, featuring the author\'s representative works and creative insights over the years. It provides detailed explanations on material selection, color application, and composition techniques, suitable for watercolor enthusiasts of all levels.',
    },
  },
];
