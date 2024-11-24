import React from 'react';
import Icon from '../atoms/ImagePlacer';
import Text from '../atoms/SpanText';
import LinkLable from '../atoms/LinkLable';

interface CardProps {
  iconSrc: string;
  title: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ iconSrc, title, link }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md text-left space-y-6">
      <Icon source={iconSrc} alt='' className='bg-footerBG mb-4'/>
      <Text className="font-bold text-sm">{title}</Text>
      <LinkLable children="바로가기" className='flex text-sm'/>
    </div>
  );
};

export default Card;
