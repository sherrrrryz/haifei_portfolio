export interface NewsItem {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  imageUrl: string;
  summary: {
    zh: string;
    en: string;
  };
  date: string;
}

export interface CollectionItem {
  id: string;
  year: number;
  artworkType: {
    zh: string;
    en: string;
  };
  artworkTitle: {
    zh: string;
    en: string;
  };
  collector: {
    zh: string;
    en: string;
  };
}

export const newsItems: NewsItem[] = [
  {
    id: '001',
    title: {
      zh: '新闻会客厅｜壁画与公共艺术的时代使命',
      en: 'News Talk | The Mission of Murals and Public Art in Our Times',
    },
    imageUrl: 'https://picsum.photos/seed/news001/400/300',
    summary: {
      zh: '本期新闻会客厅邀请郗海飞、崔彦伟，围绕新时代背景下的壁画与公共艺术的教学、创作，回应当下文化诉求，关注壁画与公共艺术的时代使命和时代使命；围绕首都机场壁画创作的渊源，引申出老一辈艺术家在壁画艺术创作领域对传统的继承，为高等美术院校专业教学提供新思路。',
      en: 'This episode of News Talk invites Xi Haifei and Cui Yanwei to discuss mural and public art education and creation in the new era, responding to current cultural demands and focusing on the mission of murals and public art. The discussion extends from the origins of Capital Airport mural creation to the inheritance of tradition by older generation artists in mural art.',
    },
    date: '2023.05',
  },
  {
    id: '002',
    title: {
      zh: '郗海飞水彩画展在中国美术馆开幕',
      en: 'Xi Haifei Watercolor Exhibition Opens at National Art Museum of China',
    },
    imageUrl: 'https://picsum.photos/seed/news002/400/300',
    summary: {
      zh: '由中国美术家协会主办的"水色江南——郗海飞水彩画展"在中国美术馆隆重开幕。展览展出了艺术家近年来创作的60余幅水彩作品，涵盖风景、静物、人物等多种题材，全面呈现了艺术家在水彩艺术领域的探索与成就。',
      en: 'The exhibition "Watercolor Jiangnan - Xi Haifei Watercolor Exhibition" hosted by the Chinese Artists Association opened grandly at the National Art Museum of China. The exhibition features over 60 watercolor works created by the artist in recent years, covering landscapes, still life, and figures.',
    },
    date: '2022.10',
  },
  {
    id: '003',
    title: {
      zh: '艺术对话：当代水彩画的传承与创新',
      en: 'Art Dialogue: Inheritance and Innovation in Contemporary Watercolor',
    },
    imageUrl: 'https://picsum.photos/seed/news003/400/300',
    summary: {
      zh: '在中央美术学院举办的"当代水彩画的传承与创新"学术研讨会上，郗海飞教授发表主题演讲，探讨了中国水彩画如何在保持传统技法的基础上，融入当代艺术观念，实现创新发展。',
      en: 'At the academic seminar "Inheritance and Innovation in Contemporary Watercolor" held at the Central Academy of Fine Arts, Professor Xi Haifei delivered a keynote speech discussing how Chinese watercolor can achieve innovative development while maintaining traditional techniques.',
    },
    date: '2021.06',
  },
];

export const collectionItems: CollectionItem[] = [
  {
    id: '001',
    year: 2011,
    artworkType: { zh: '油画', en: 'Oil painting' },
    artworkTitle: { zh: '意象风景之一', en: 'Impression Landscape I' },
    collector: { zh: '英国大英博物馆', en: 'British Museum, UK' },
  },
  {
    id: '002',
    year: 2011,
    artworkType: { zh: '油画', en: 'Oil painting' },
    artworkTitle: { zh: '清晨', en: 'Morning' },
    collector: { zh: '中国美术馆', en: 'National Art Museum of China' },
  },
  {
    id: '003',
    year: 2011,
    artworkType: { zh: '油画', en: 'Oil painting' },
    artworkTitle: { zh: '原野清雨', en: 'Light Rain on the Plain' },
    collector: { zh: '中国美术馆', en: 'National Art Museum of China' },
  },
  {
    id: '004',
    year: 2010,
    artworkType: { zh: '水彩', en: 'Watercolor' },
    artworkTitle: { zh: '江南水乡', en: 'Jiangnan Water Town' },
    collector: { zh: '上海美术馆', en: 'Shanghai Art Museum' },
  },
  {
    id: '005',
    year: 2008,
    artworkType: { zh: '水彩', en: 'Watercolor' },
    artworkTitle: { zh: '威尼斯印象', en: 'Venice Impression' },
    collector: { zh: '意大利国家现代美术馆', en: 'National Gallery of Modern Art, Italy' },
  },
  {
    id: '006',
    year: 2005,
    artworkType: { zh: '油画', en: 'Oil painting' },
    artworkTitle: { zh: '都市黄昏', en: 'Urban Twilight' },
    collector: { zh: '广东美术馆', en: 'Guangdong Museum of Art' },
  },
];
