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
    coverUrl: '/images/publications/city-expression.jpg',
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
      zh: '壁画艺术',
      en: 'Mural Art',
    },
    coverUrl: '/images/publications/mural-art.jpg',
    publisher: {
      zh: '吉林美术出版社',
      en: 'Jilin Fine Arts Publishing House',
    },
    author: {
      zh: '郗海飞',
      en: 'Xi Haifei',
    },
    publishDate: '',
    format: {
      zh: '16开',
      en: '16mo',
    },
    printRun: {
      zh: '',
      en: '',
    },
    category: {
      zh: '广告设计',
      en: 'Advertising Design',
    },
    price: '23.50',
    isbn: '',
    summary: {
      zh: '目录：\n\n第一章 壁画艺术概述（历史的比较、中西壁画艺术发展对比简表、现代本国壁画艺术的复兴）\n\n第二章 现状与发展（主流与样式、材料与审美、功能与设计、方法与实践）\n\n第三章 基本工艺简介（壁画常用材料、丙烯壁画的制作方法简介、壁毯的制作方法简介）\n\n后记 关于"装饰画"的断想等',
      en: 'Table of Contents:\n\nChapter 1: Overview of Mural Art (Historical comparison, Comparative chart of Chinese and Western mural art development, Revival of modern domestic mural art)\n\nChapter 2: Current Status and Development (Mainstream and styles, Materials and aesthetics, Function and design, Methods and practice)\n\nChapter 3: Introduction to Basic Techniques (Common mural materials, Introduction to acrylic mural production methods, Introduction to tapestry production methods)\n\nAfterword: Thoughts on "Decorative Painting", etc.',
    },
  },
  {
    id: '003',
    title: {
      zh: '中国壁画·清华大学美术学院卷',
      en: 'Chinese Murals: Tsinghua University Academy of Fine Arts Volume',
    },
    coverUrl: '/images/publications/chinese-mural-tsinghua.jpg',
    publisher: {
      zh: '江苏凤凰美术出版社',
      en: 'Jiangsu Phoenix Fine Arts Publishing House',
    },
    author: {
      zh: '郗海飞',
      en: 'Xi Haifei',
    },
    publishDate: '',
    format: {
      zh: '8开',
      en: '8vo',
    },
    printRun: {
      zh: '2015年9月第一次',
      en: 'First printing, September 2015',
    },
    category: {
      zh: '中国画',
      en: 'Chinese Painting',
    },
    price: '128.00',
    isbn: '978-7-5344-8313-4',
    summary: {
      zh: '',
      en: '',
    },
  },
];
