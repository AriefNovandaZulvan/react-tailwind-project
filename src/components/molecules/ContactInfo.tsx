import React from 'react';
import SpanText from '../atoms/SpanText';
import Logo from '../atoms/ImagePlacer';
import HyperHire from '../../../public/images/hyperhirefooter.png' 

const ContactInfo: React.FC = () => {
  return (
    <div className='flex flex-col items-start space-y-4'>
      <Logo source={HyperHire.src} alt="Hyperhire Logo" />
      <SpanText className="text-sm font-bold">
        우리는 국가와 경계를 넘어 최고의 인재를 매칭해드립니다.
      </SpanText>
      <SpanText className="text-xs font-bold">010-0000-0000</SpanText>
      <SpanText className="text-xs font-bold">aaaaa@naver.com</SpanText>
    </div>
  );
};

export default ContactInfo;
