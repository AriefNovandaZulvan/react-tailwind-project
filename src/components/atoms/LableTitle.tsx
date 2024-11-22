import React from 'react';

interface LableTitleProps {
  text: string;
  isHighlight?: boolean;
}

const LableTitle: React.FC<LableTitleProps> = ({ text, isHighlight }) => {
  return (
    <h1
      className={`text-lg sm:text-lg md:text-xl lg:text-3xl xl:text-5xl font-bold ${
        isHighlight ? 'text-blue-900' : 'text-white'
      }`}
    >
      {text}
    </h1>
  );
};

export default LableTitle;