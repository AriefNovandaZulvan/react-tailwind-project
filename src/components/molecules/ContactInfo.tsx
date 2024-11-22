import React from 'react';
import FooterText from '../atoms/SpanSmall';
import Logo from '../atoms/ImagePlacer';
import hyperhireLogo from '../../../public/images/hyperhirefooter.png' 

const ContactInfo: React.FC = () => {
  return (
    <div>
      <Logo src={hyperhireLogo.src} alt="Hyperhire Logo" />
      <FooterText className="font-medium">
        우리는 국가와 경계를 넘어 최고의 인재를 매칭해드립니다.
      </FooterText>
      <FooterText>010-0000-0000</FooterText>
      <FooterText>aaaaa@naver.com</FooterText>
    </div>
  );
};

export default ContactInfo;
