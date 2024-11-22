import React from 'react';

interface CardTitleProps {
  title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
  return <div className="text-lg font-semibold text-center">{title}</div>;
};

export default CardTitle;