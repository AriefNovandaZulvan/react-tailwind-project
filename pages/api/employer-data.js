export default function handler(req, res) {
    const sampleData = [
      {
        id: 1,
        name: 'Abhishek Gupta 1',
        position: '마케팅',
        experience: '2y+',
        tasks: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
        image: 'https://placehold.co/100x100',
        flag: '🇮🇳',
      },
      {
        id: 2,
        name: 'Abhishek Gupta 2',
        position: '마케팅',
        experience: '2y+',
        tasks: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
        image: 'https://placehold.co/100x100',
        flag: '🇮🇳',
      },
      {
        id: 3,
        name: 'Abhishek Gupta 3',
        position: '마케팅',
        experience: '2y+',
        tasks: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
        image: 'https://placehold.co/100x100',
        flag: '🇮🇳',
      },
    ];
  
    res.status(200).json(sampleData);
  }