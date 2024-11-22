// src/components/atoms/Subtitle.tsx
import React from 'react';

interface LableSubtitleProps {
  text: string;
}

const LableSubtitle: React.FC<LableSubtitleProps> = ({ text }) => {
  return <h2 className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-white ">{text}</h2>;
};

export default LableSubtitle;
