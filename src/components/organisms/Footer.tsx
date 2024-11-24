import React from 'react';
import ContactInfo from '../molecules/ContactInfo';
import ServicesCard from '../molecules/ServicesCard';
import SpanSmall from '../atoms/SpanText';

import kor from '../../../public/images/kor.png'
import user from '../../../public/images/user.png'
import gear from '../../../public/images/gear.png'
import code from '../../../public/images/code.png'
import FooterText from '../molecules/FooterText';

const Footer: React.FC = () => {
  const links = [
    { image: code.src, text: '해외 개발자 원격 채용' },
    { image: gear.src, text: '외국인 원격 채용 (개발)' },
    { image: user.src, text: '한국어 가능 외국인 채용' },
    { image: kor.src, text: '해외 개발 활용 서비스' },
  ];

  
  return (
    <footer className="bg-footerBG py-8 border-t border-footerBG">
      <div className='w-full md:w-8/12 m-auto space-y-9'>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          <ContactInfo/>
          <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {links.map((link, index) => (
              <ServicesCard key={index} iconSrc={link.image} title={link.text} link='#' />
            ))}
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 mt-6">
            <FooterText text1='상호명' text2='하이퍼하이어' text3='Hyperhire India Private Limited'/>
            <FooterText text1='H대표 CEO' text2='김주현' text3='Juhyun Kim'/>
            <FooterText text1='사업자등록번호 CIN' text2='427-86-01187' text3='U74110DL2016PTC290812'/>
            <FooterText text1='주소 ADDRESS' text2='서울특별시 강남대로 479, 지하 1층 238호' text3='D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,110053 India'/>
        </div>
        <SpanSmall className="text-left text-xs mt-10">
          © 2023 Hyperhire
        </SpanSmall>
      </div>
    </footer>
  );
};

export default Footer;
