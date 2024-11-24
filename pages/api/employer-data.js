export default function handler(req, res) {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://sipalingtech.com:3001';
    const sampleData = [
      {
        id: 1,
        name: 'Abhishek Gupta 1',
        position: '마케팅',
        experience: '2y+',
        tasks: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
        image: `${baseURL}/images/pp.png`,
        flag: '🇮🇳',
      },
      {
        id: 2,
        name: 'Abhishek Gupta 2',
        position: '마케팅',
        experience: '2y+',
        tasks: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
        image: `${baseURL}/images/pp.png`,
        flag: '🇮🇳',
      },
      {
        id: 3,
        name: 'Abhishek Gupta 3',
        position: '마케팅',
        experience: '2y+',
        tasks: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
        image: `${baseURL}/images/pp.png`,
        flag: '🇮🇳',
      },
    ];
  
    res.status(200).json(sampleData);
  }