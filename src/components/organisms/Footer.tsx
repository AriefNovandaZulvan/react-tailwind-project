import React from 'react';
import ContactInfo from '../molecules/ContactInfo';
import ServicesCard from '../molecules/ServicesCard';
import SpanSmall from '../atoms/SpanSmall';

const Footer: React.FC = () => {
  const links = [
    { icon: '💻', text: '해외 개발자 원격 채용' },
    { icon: '🌍', text: '외국인 원격 채용 (개발)' },
    { icon: '🇰🇷', text: '한국어 가능 외국인 채용' },
    { icon: '🛠️', text: '해외 개발 활용 서비스' },
  ];

  
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <ContactInfo />
        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <ServicesCard key={index} icon={link.icon} text={link.text} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <SpanSmall>상호명</SpanSmall>
            <SpanSmall>하이퍼하이어</SpanSmall>
            <SpanSmall>대표 CEO</SpanSmall>
            <SpanSmall>김주현</SpanSmall>
          </div>
          <div>
            <SpanSmall>사업자등록번호 CIN</SpanSmall>
            <SpanSmall>427-88-01187</SpanSmall>
            <SpanSmall>주소 ADDRESS</SpanSmall>
            <SpanSmall>
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
              110053 India
            </SpanSmall>
          </div>
        </div>
      </div>
      <SpanSmall className="text-center mt-6 text-gray-500">
        © 2023 Hyperhire
      </SpanSmall>
    </footer>
  );
};

export default Footer;
