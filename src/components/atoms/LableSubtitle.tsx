// src/components/atoms/Subtitle.tsx
import React from 'react';

interface LableSubtitleProps {
  text: string;
  className?: string;
}

const LableSubtitle: React.FC<LableSubtitleProps> = ({ text, className }) => {
  return <h3 className={`text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl  font-bold ${className}`}>{text}</h3>;
};

export default LableSubtitle;
