import React from 'react';
import Icon from '../atoms/ImageIcon';
import CardTitle from '../atoms/CardTitle';

interface CarouselCardProps {
  icon: string;
  title: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ icon, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
      <Icon>{icon}</Icon>
      <CardTitle title={title} />
    </div>
  );
};

export default CarouselCard;
