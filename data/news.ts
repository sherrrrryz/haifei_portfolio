export interface ContentBlock {
  type: 'text' | 'image';
  content?: {
    zh: string;
    en: string;
  };
  imageUrl?: string;
}

export interface NewsItem {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  imageUrl: string;
  images?: string[];
  contentBlocks?: ContentBlock[];
  videoUrl?: string;
  source?: {
    zh: string;
    en: string;
  };
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
    imageUrl: '/images/news/news001-2.webp',
    images: [
      '/images/news/news001-1.webp',
      '/images/news/news001-2.webp',
      '/images/news/news001-3.webp',
      '/images/news/news001-4.webp',
    ],
    videoUrl: '/images/news/news001-video.mp4',
    source: {
      zh: '书画频道',
      en: 'Calligraphy and Painting Channel',
    },
    summary: {
      zh: '本期新闻会客厅邀请郗海飞、崔彦伟，围绕新时代背景下的壁画与公共艺术的教学、创作，回应当下文化诉求，关注壁画与公共艺术的时代使命和时代使命；围绕首都机场壁画创作的渊源，引申出老一辈艺术家在壁画艺术创作领域对传统的继承，为高等美术院校专业教学提供新思路。',
      en: 'This episode of News Talk invites Xi Haifei and Cui Yanwei to discuss mural and public art education and creation in the new era, responding to current cultural demands and focusing on the mission of murals and public art. The discussion extends from the origins of Capital Airport mural creation to the inheritance of tradition by older generation artists in mural art, providing new ideas for professional teaching in higher art academies.',
    },
    date: '2020-07-07',
  },
  {
    id: '002',
    title: {
      zh: '"仰山论坛——传统壁画在当代的传承与发展"在书画频道艺术交流中心举行',
      en: '"Yangshan Forum - Inheritance and Development of Traditional Murals in Contemporary Times" Held at Calligraphy and Painting Channel Art Exchange Center',
    },
    imageUrl: '/images/news/news002-1.webp',
    videoUrl: '/images/news/news002-video.mp4',
    source: {
      zh: '书画频道',
      en: 'Calligraphy and Painting Channel',
    },
    contentBlocks: [
      {
        type: 'text',
        content: {
          zh: '奥林匹克森林公园绿意盎然、碧波荡漾，5月9日，由书画频道主办的仰山论坛系列活动之"传统壁画在当代的传承与发展"在书画频道艺术交流中心举行。',
          en: 'With lush greenery and rippling waters at the Olympic Forest Park, on May 9th, the Yangshan Forum series event "Inheritance and Development of Traditional Murals in Contemporary Times" hosted by the Calligraphy and Painting Channel was held at the Calligraphy and Painting Channel Art Exchange Center.',
        },
      },
      { type: 'image', imageUrl: '/images/news/news002-1.webp' },
      {
        type: 'text',
        content: {
          zh: '中国传统壁画艺术是中华民族特色美术的重要组成部分，其中蕴含着许多中国绘画的美学精髓和精神内涵，在世界文明史上有着极其重要的地位，而且存世量众多。通过对传统壁画进行研究，可以启发中国画及其他绘画门类的艺术思维，激活创新的原动力。进入新时代，传统文化全面复兴，此时，重新梳理和认识传统壁画，必将对当代艺术的发展起到极大的促进作用。',
          en: 'Chinese traditional mural art is an important component of Chinese national characteristic art, containing many aesthetic essences and spiritual connotations of Chinese painting. It holds an extremely important position in the history of world civilization, with numerous surviving works. Through the study of traditional murals, we can inspire artistic thinking in Chinese painting and other painting categories, activating the original driving force of innovation. Entering the new era of comprehensive traditional cultural revival, re-examining and understanding traditional murals will greatly promote the development of contemporary art.',
        },
      },
      { type: 'image', imageUrl: '/images/news/news002-2.webp' },
      {
        type: 'text',
        content: {
          zh: '本次论坛特邀学术主持人王颖生与艺术家孙景波、孙韬、郗海飞、崔彦伟围绕着壁画艺术的过去、现在与将来展开热烈的讨论，从不同角度、不同层面梳理了这一既有悠久历史文化积淀，同时也与科技发展紧密相关画种的发展脉络与走向。',
          en: 'This forum specially invited academic host Wang Yingsheng and artists Sun Jingbo, Sun Tao, Xi Haifei, and Cui Yanwei to engage in lively discussions around the past, present, and future of mural art, sorting out the development context and direction of this art form with long historical and cultural accumulation that is also closely related to technological development from different angles and levels.',
        },
      },
      { type: 'image', imageUrl: '/images/news/news002-3.webp' },
      {
        type: 'text',
        content: {
          zh: '王颖生认为，壁画艺术的接受既有主动的接受，同时更多的则是人们去被动地接受，他以科技的发展对传统艺术产生极大的冲击来阐释壁画创作者不仅责任重大，而且存在着一定的隐忧，并深情地回顾了与孙景波历时三年，在高达十二米高架上完成大同壁画创作。',
          en: 'Wang Yingsheng believes that the acceptance of mural art includes both active acceptance and more often passive acceptance by people. He explained that mural creators bear great responsibility and certain concerns through the great impact of technological development on traditional art, and affectionately recalled completing the Datong mural creation on a twelve-meter-high scaffold over three years with Sun Jingbo.',
        },
      },
      { type: 'image', imageUrl: '/images/news/news002-4.webp' },
      {
        type: 'text',
        content: {
          zh: '孙景波对壁画的发展史脉络进行勾勒，认为壁画艺术是一种环境艺术，其独特的视觉文化是图画的《史记》，同时也是形象的《资治通鉴》，这一形象的比喻凸显了壁画艺术在人类文明进程中的重要意义，他作为老一代壁画艺术创作、教学者，认为壁画创作者必须要具备一定的奉献精神。',
          en: 'Sun Jingbo outlined the development history of murals, believing that mural art is an environmental art, its unique visual culture being the "Records of the Grand Historian" in pictures and the "Comprehensive Mirror to Aid in Government" in images. This vivid metaphor highlights the important significance of mural art in the progress of human civilization. As an older generation mural art creator and educator, he believes mural creators must possess a certain spirit of dedication.',
        },
      },
      { type: 'image', imageUrl: '/images/news/news002-5.webp' },
      {
        type: 'text',
        content: {
          zh: '孙韬作为曾经留学俄罗斯的学者，对中西方壁画艺术进行对比，指出很多人去欧洲排队观摩《最后的晚餐》，却对本民族资源丰富、表现手法多元的壁画艺术不是很了解，并以永乐宫壁画观者寥寥的现实情况呼吁大家走近这一中华优秀传统文化。',
          en: 'As a scholar who studied in Russia, Sun Tao compared Chinese and Western mural art, pointing out that many people queue up in Europe to see "The Last Supper" but are not very familiar with the mural art of their own nation, which is rich in resources and diverse in expression. He called on everyone to approach this excellent Chinese traditional culture using the reality of few visitors to the Yongle Palace murals.',
        },
      },
      { type: 'image', imageUrl: '/images/news/news002-6.webp' },
      {
        type: 'text',
        content: {
          zh: '郗海飞以纪念机场壁画40周年为例，对40年前这个大型创作活动的现实意义与历史文化进行总结，并以当时中央工艺美术学院开设壁画与公共艺术专业为例，说明随着社会的发展、城市化的进程，壁画艺术逐渐进入公共文化空间，助力国家公共文化建设。',
          en: 'Xi Haifei used the 40th anniversary of the airport murals as an example to summarize the practical significance and historical culture of this large-scale creative activity 40 years ago. Using the example of the Central Academy of Arts and Crafts opening the mural and public art major at that time, he explained that with social development and urbanization, mural art has gradually entered public cultural spaces, contributing to national public cultural construction.',
        },
      },
      { type: 'image', imageUrl: '/images/news/news002-7.webp' },
      {
        type: 'text',
        content: {
          zh: '崔彦伟指出，早在1958年中央美术学院与当时的中央工艺美术学院为满足社会的需求便开设了壁画专业，认为机场壁画创作时期，师生长达13个月生活于创作现场是传统意义上的师傅带徒弟教学模式，面对当下，壁画艺术家应该放下身段地以平民视角关注城市、关注民众是壁画艺术进一步发展的基本方向。',
          en: 'Cui Yanwei pointed out that as early as 1958, the Central Academy of Fine Arts and the Central Academy of Arts and Crafts opened the mural major to meet social needs. He believed that during the airport mural creation period, teachers and students living at the creation site for 13 months was a traditional master-apprentice teaching model. Facing the present, mural artists should humbly pay attention to cities and people from a civilian perspective, which is the basic direction for further development of mural art.',
        },
      },
      { type: 'image', imageUrl: '/images/news/news002-8.webp' },
      { type: 'image', imageUrl: '/images/news/news002-9.webp' },
      {
        type: 'text',
        content: {
          zh: '随着时代的发展，壁画艺术已摆脱传统意义补壁层面的认识，逐渐成为公共文化建设中不可或缺的重要组成部分，书画频道以弘扬中华优秀传统文化为使命，时刻关注着各艺术门类的发展，特别举办此次活动来让人民大众了解这一长达两万年的绘画样式，尤其是随着科技的不断发展而产生的在材料、技法层面所注入的活力，从中感悟传统绘画艺术与科技结合对公共文化建设所展现的时代魅力。',
          en: 'With the development of the times, mural art has moved beyond the traditional understanding of wall decoration and gradually become an indispensable important component of public cultural construction. The Calligraphy and Painting Channel, with the mission of promoting excellent Chinese traditional culture, constantly pays attention to the development of various art categories. This event was specially held to let the public understand this painting form spanning 20,000 years, especially the vitality injected at the material and technique levels with the continuous development of technology, to appreciate the contemporary charm of traditional painting art combined with technology in public cultural construction.',
        },
      },
      { type: 'image', imageUrl: '/images/news/news002-10.webp' },
    ],
    summary: {
      zh: '由书画频道主办的仰山论坛系列活动之"传统壁画在当代的传承与发展"在书画频道艺术交流中心举行。本次论坛特邀学术主持人王颖生与艺术家孙景波、孙韬、郗海飞、崔彦伟围绕着壁画艺术的过去、现在与将来展开热烈的讨论。',
      en: 'The Yangshan Forum series event "Inheritance and Development of Traditional Murals in Contemporary Times" hosted by the Calligraphy and Painting Channel was held at the Art Exchange Center. The forum invited academic host Wang Yingsheng and artists Sun Jingbo, Sun Tao, Xi Haifei, and Cui Yanwei to discuss the past, present, and future of mural art.',
    },
    date: '2020-07-07',
  },
  {
    id: '003',
    title: {
      zh: '【观点】风景是个梦',
      en: '[Perspective] Landscape Is a Dream',
    },
    imageUrl: '',
    source: {
      zh: '艺术家提供',
      en: 'Provided by the Artist',
    },
    contentBlocks: [
      {
        type: 'text',
        content: {
          zh: '作者：郗海飞\n\n从1979年秋天承德写生开始，记得是大二，那是中央美术学院的梁栋先生带我们班去承德画水彩写生月余，至今已三十多年了。期间也画了不少写生，回头看来，竟然画的几乎全是风景，这多少证明了我对画风景的顽固兴趣。',
          en: 'Author: Xi Haifei\n\nStarting from the autumn of 1979 when I painted in Chengde, I remember it was my sophomore year. Mr. Liang Dong from the Central Academy of Fine Arts took our class to Chengde for over a month of watercolor plein air painting. More than thirty years have passed since then. During this time, I painted quite a lot of plein air works, and looking back, almost all of them were landscapes, which somewhat proves my stubborn interest in painting landscapes.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '小时候学画时，在海边画风景。后来走到哪里便画到哪里。后来中学毕业进工厂画瓷壶，73年上中专学国画，也是第一次跟高潮老师画水彩，兼学陶瓷彩绘。毕业后又搞装潢和印刷，就是如今所说的视觉传达。上大学本科跟郑可先生、何燕明先生等学做雕塑。读硕士跟袁运甫先生学壁画…。',
          en: 'When I was young learning to paint, I painted landscapes by the sea. Later, wherever I went, I painted. After graduating from middle school, I went to work in a factory painting porcelain pots. In 1973, I went to technical school to study Chinese painting, and for the first time studied watercolor with Teacher Gao Chao, while also learning ceramic painting. After graduation, I worked in decoration and printing, what is now called visual communication. In university, I studied sculpture with Mr. Zheng Ke and Mr. He Yanming. For my master\'s degree, I studied murals with Mr. Yuan Yunfu...',
        },
      },
      {
        type: 'text',
        content: {
          zh: '逐渐长大了，干的杂事更多了，如同万金油。壁画、设计、工厂、现场、甲方、乙方的，忙的晕头转向，美其名曰：综合艺术。但唯有看风景、画风景方可使我安静，且无须看任何人的脸色，算是于忙碌中还有一梦可做。',
          en: 'As I gradually grew up, I did more and more miscellaneous work, like a jack of all trades. Murals, design, factories, on-site work, Party A, Party B - I was so busy I was dizzy, glorified as: comprehensive art. But only viewing and painting landscapes could calm me down, without having to watch anyone\'s face. It was a dream I could still have amid the busyness.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '的确，风景因为好看，才有人画下来。一来自我慰籍与满足，其次与他人分享。展子虔，范宽，李唐，黄宾虹，傅抱石诸多先人是为范本；透纳，庚斯博罗，巴比松、印象派群体亦为榜样。相互渗透、糅杂的久了，就生成了各类视觉样式。',
          en: 'Indeed, landscapes are painted because they are beautiful. First for self-comfort and satisfaction, then to share with others. Zhan Ziqian, Fan Kuan, Li Tang, Huang Binhong, Fu Baoshi and many other predecessors serve as models; Turner, Gainsborough, the Barbizon school, and the Impressionist group are also examples. After long mutual penetration and mixing, various visual styles were generated.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '自然的风景，像缅因州的风景，用我一位朋友的话来说，有种"很异样的凝重感"——翻翻书看看，怀斯也是这样感觉的，他曾说过，那里像是月球……，他画的很准。西雅图的内海湖泊，每年春季照例发着水冲走房子，但仍让你看得发呆。瑞士人谨慎、静谧，像造表一样地守着、建着阿尔卑斯山，引得世界痴醉神往。而挪威的峡湾及冻土带的景观，依我看，夸张点说，值得死在那儿。',
          en: 'Natural landscapes, like those in Maine, as a friend of mine said, have "a very strange sense of solemnity" - look through books and you\'ll see Wyeth felt the same way. He once said it was like the moon... he painted it very accurately. The inland lakes of Seattle flood every spring and wash away houses as usual, but still leave you staring in amazement. The Swiss are cautious and quiet, guarding and building the Alps like making watches, attracting the world\'s fascination. As for the fjords of Norway and the permafrost landscape, in my view, to exaggerate a bit, it\'s worth dying there.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '这些地方，不是光有植物，而是有风景，是人的灵魂与自然构成的风景，人与风景同在。',
          en: 'These places don\'t just have vegetation, they have landscapes - landscapes composed of human souls and nature, where people and landscapes coexist.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '我们确是有植物的，有城市的，但好像没有风景。有了城市，有了植物，又有了人，原来的风景即彻底被毁。',
          en: 'We do have vegetation and cities, but it seems we don\'t have landscapes. With cities, vegetation, and people, the original landscapes are completely destroyed.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '十七世纪的荷兰人用24块美金买下了曼哈顿岛，建起了突兀骇人的城市风景，今天我们也要有，是追纽约的样式，但现在看来距离仍很远，且不说是否值得去追。全国各地拆城、建城，于是，该留的没留下，新造的也令人难以品尝。',
          en: 'In the 17th century, the Dutch bought Manhattan Island for 24 dollars and built an abrupt and startling urban landscape. Today we want to have it too, chasing the New York style, but the distance still seems far, not to mention whether it\'s worth chasing. Cities are being demolished and built everywhere across the country, so what should have been preserved wasn\'t, and what\'s newly built is hard to appreciate.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '丹青说过一句，费城只有植物，没有乡村和自然。我去过两次，看那城市是很老、很大，极开阔，像华盛顿，马德里，柏林。它们看上去很好看，就像老挂历。那老街景挺好看，但少有人画。德国的基佛尔亦怀疑这类城市风景的价值，并把这怀疑和迷茫画到画里。而在纽约的王玉琦，回国看了云南腾冲洪荒的原始风景后和我说，为什么没人画？',
          en: 'Dan Qing once said Philadelphia only has vegetation, no countryside or nature. I\'ve been there twice, and that city is very old, very large, extremely open, like Washington, Madrid, Berlin. They look very nice, like old calendars. The old streetscapes look quite nice, but few people paint them. Germany\'s Kiefer also doubts the value of such urban landscapes and paints this doubt and confusion into his paintings. Wang Yuqi in New York, after returning to China and seeing the primordial landscapes of Tengchong in Yunnan, asked me: why doesn\'t anyone paint this?',
        },
      },
      {
        type: 'text',
        content: {
          zh: '我不知道。也许认为那景色太俗吧。但我心里真的很喜欢，看着那老城和老乡村的风景，我问过画画的和不画画的，私下里几乎都说喜欢。',
          en: 'I don\'t know. Perhaps they think the scenery is too vulgar. But I really like it in my heart. Looking at the landscapes of old cities and old villages, I\'ve asked both painters and non-painters, and almost all of them privately say they like it.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '我偏爱风景。愿看，也愿画大天大地的那种，对乡村风景尤其偏爱。这可能与儿时生活在广阔的海边有关。十几岁初学画时便被老师带着，早上一张日出，晚上一张日落地画过去，以至于留了不灭的记忆，发展成了兴趣。后来长大了，干的事太杂，虽远离了画风景，但每每出游，仍然极顽固地搜罗、品尝种种风景。',
          en: 'I have a fondness for landscapes. I like to view and paint the kind with vast skies and earth, especially rural landscapes. This may be related to living by the vast sea as a child. When I first learned to paint in my teens, my teacher took me to paint a sunrise in the morning and a sunset in the evening, leaving indelible memories that developed into an interest. Later when I grew up and did too many miscellaneous things, although I stayed away from painting landscapes, every time I traveled, I still stubbornly searched for and savored all kinds of landscapes.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '风景，说穿了是人的风景，人心里的风景。',
          en: 'Landscape, to put it plainly, is the landscape of people, the landscape in people\'s hearts.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '今天的人画风景，有批判的，有质疑的，有赞赏的，亦有想象的，多有面貌，但我始终以为，朴实谦恭地与自然对话是必须的，尽管我们的风景和自然总是令人失望居多。',
          en: 'Today\'s people paint landscapes with criticism, questioning, appreciation, and imagination, with many appearances. But I always believe that a simple and humble dialogue with nature is necessary, even though our landscapes and nature are often disappointing.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '生态是整体的，自然中的水汽足，少污染，风调雨顺，生态的多样性就好，人在其中就会变得勤劳并出于本能地精心维护。于是看上去到处洁净，精致，人心健康而善良，生活富足而平和。北方的洪荒壮丽，南方的精致敏感皆由此而生。这份长久的精致和由此生出的风景，既养眼又养心，于是画从心发，艺术便成为这生态链完整和健康的最后一端。苏州、四川等地至今仍保持此像，令人艳羡。',
          en: 'Ecology is holistic. When nature has sufficient moisture, little pollution, favorable weather, and good ecological diversity, people become hardworking and instinctively maintain it carefully. So everything looks clean and refined, people\'s hearts are healthy and kind, and life is prosperous and peaceful. The vast magnificence of the north and the refined sensitivity of the south all arise from this. This long-lasting refinement and the landscapes it generates nourish both the eyes and the heart. Thus paintings come from the heart, and art becomes the final link in this complete and healthy ecological chain. Places like Suzhou and Sichuan still maintain this image today, which is enviable.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '但人心若污染了，即会蔓延到生活的种种方面。人心乱了，里外都失了分寸，人也随即变懒。看上去风景不好的地方，人的生活也一定不会好，风景也一定是脏脏的，乱乱的，并任由这脏乱持续，浸淫心灵，从而形成恶性循环以至于一败涂地、不可收拾。即便弥补，也是敷衍。林木没有比例、尺度，色彩没有层次，树种没有筛选，简单地弄绿了，以为是绿化，完全没有智慧和灵魂，没有人的精心劳作。今天看到的无序、脏乱和污染，都因这份懒散、敷衍、自私和短视。也因了这份脏乱和懒惰和敷衍，便料定不会产生善意的想象力，不会产生美妙的歌词和诗句，更不会产生漂亮的图画。看看历史就十分清楚了。',
          en: 'But if people\'s hearts are polluted, it will spread to all aspects of life. When hearts are confused, both inside and outside lose their measure, and people become lazy. Places that look like they have bad landscapes will definitely not have good life either, and the landscapes are bound to be dirty and messy, allowing this dirtiness to continue, soaking into the soul, forming a vicious cycle until complete collapse. Even remediation is perfunctory. Trees have no proportion or scale, colors have no layers, tree species are not selected, simply greened up and called greening, completely without wisdom and soul, without people\'s careful labor. The disorder, mess, and pollution we see today are all due to this laziness, perfunctoriness, selfishness, and short-sightedness. And because of this mess, laziness, and perfunctoriness, it\'s certain that benevolent imagination won\'t be produced, wonderful lyrics and verses won\'t be produced, and beautiful paintings certainly won\'t be produced. Look at history and it\'s very clear.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '苏州人在小小虎丘上刻了几行小字：\n\n此处有崇山峻岭。\n\n可笑吗？我看未必。',
          en: 'The people of Suzhou carved a few small characters on the small Tiger Hill:\n\n"Here there are lofty mountains and steep ridges."\n\nIs it laughable? I don\'t think so.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '自然和城市都与人关联着，要么留好，要么建好，都在于人心。人毁了风景，也毁了人心，风景会报复的。',
          en: 'Both nature and cities are connected to people. Whether to preserve well or build well, it all depends on people\'s hearts. People destroy landscapes and also destroy their hearts. Landscapes will take revenge.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '我曾经画了一批这种伤痕般的风景，以示愤怒和批判，但也因此而伤了心，此后决意只画较为美丽壮观和想象中的风景。',
          en: 'I once painted a batch of such scar-like landscapes to show anger and criticism, but this also hurt my heart. Since then, I decided to only paint more beautiful, spectacular, and imagined landscapes.',
        },
      },
      {
        type: 'text',
        content: {
          zh: '因此，于我来说，真正的风景其实只存于幻想中，在心里，画风景成了做梦，风景便也成了梦。\n\n郗海飞\n\n2014.1.6',
          en: 'Therefore, for me, true landscapes actually only exist in fantasy, in the heart. Painting landscapes has become dreaming, and landscapes have become dreams.\n\nXi Haifei\n\n2014.1.6',
        },
      },
    ],
    summary: {
      zh: '从1979年秋天承德写生开始，记得是大二，那是中央美术学院的梁栋先生带我们班去承德画水彩写生月余，至今已三十多年了。期间也画了不少写生，回头看来，竟然画的几乎全是风景，这多少证明了我对画风景的顽固兴趣。',
      en: 'Starting from the autumn of 1979 when I painted in Chengde, I remember it was my sophomore year. Mr. Liang Dong from the Central Academy of Fine Arts took our class to Chengde for over a month of watercolor plein air painting. More than thirty years have passed since then.',
    },
    date: '2014-07-08',
  },
];

export const collectionItems: CollectionItem[] = [
  {
    id: '001',
    year: 2011,
    artworkType: { zh: '油画', en: 'Oil painting' },
    artworkTitle: { zh: '意象风景之一', en: 'Impression Landscape I' },
    collector: { zh: '英国英美矿业海外服务有限公司北京代表处', en: 'Anglo American Overseas Services Ltd. Beijing Representative Office' },
  },
  {
    id: '002',
    year: 2011,
    artworkType: { zh: '油画', en: 'Oil painting' },
    artworkTitle: { zh: '清晨》、《原野清雨', en: 'Morning" and "Light Rain on the Plain' },
    collector: { zh: '四川成都收藏家', en: 'Private collector in Chengdu, Sichuan' },
  },
];
