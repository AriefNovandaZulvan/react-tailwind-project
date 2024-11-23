import React from 'react';
import ImagePlacer from '../atoms/ImagePlacer';
import LableSubtitle from '../atoms/LableSubtitle';

interface HighLightCardProps {
  image: string;
  title: string;
}

const HighLightCard: React.FC<HighLightCardProps> = ({ image, title }) => {
  return (
    <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-4 w-full flex flex-row items-center justify-left ml-0">
      <ImagePlacer source={image} alt='highlight-image' className='mr-4'/>
      <LableSubtitle text={title} className='text-white'/>
    </div>
  );
};

export default HighLightCard;
