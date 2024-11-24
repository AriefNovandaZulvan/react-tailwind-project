export default function handler(req, res) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';
  const items = [
    { title: '해외 마케팅', image: `${baseURL}/images/f-1.png` },
    { title: '퍼블리셔', image: `${baseURL}/images/f-2.png` },
    { title: '캔드원(제조사)', image: `${baseURL}/images/f-3.png` },
    { title: '해외 세일즈', image: `${baseURL}/images/f-4.png` },
    { title: '해외 CS', image: `${baseURL}/images/f-5.png` },
  ];

  res.status(200).json(items);
}
