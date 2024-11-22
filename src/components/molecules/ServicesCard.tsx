import React from 'react';
import ImageIcon from '../atoms/ImageIcon';

interface IconButtonProps {
  icon: React.ReactNode;
  text: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2 bg-white shadow-md rounded-lg p-3 hover:shadow-lg transition">
      <ImageIcon children={icon} />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default IconButton;