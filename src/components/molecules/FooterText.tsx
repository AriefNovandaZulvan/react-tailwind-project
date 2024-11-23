import React from 'react';
import SpanSmall from '../atoms/SpanText';

interface FooterTextProps {
    text1: string;
    text2: string;
    text3: string;
  }

const FooterText: React.FC<FooterTextProps> = ({ text1, text2, text3 }) => {
  return (
    <div className=''>
        <SpanSmall className='text-left text-xs font-bold' >{text1}</SpanSmall>
        <br/>
        <SpanSmall className="text-left text-xs text-footerText font-bold">{text2}</SpanSmall>
        <br/>
        <SpanSmall className="text-left text-xs text-footerText font-bold">{text3}</SpanSmall>
    </div>
  );
};

export default FooterText;
