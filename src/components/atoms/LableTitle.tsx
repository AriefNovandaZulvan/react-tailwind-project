import React from 'react';

interface LableTitleProps {
  text: string;
  isHighlight?: boolean;
}

const LableTitle: React.FC<LableTitleProps> = ({ text, isHighlight }) => {
  return (
    <h2
      className={`text-lg md:text-5xl font-bold mt-1 ${
        isHighlight ? 'text-blue-900' : 'text-white'
      }`}
    >
      {text}
    </h2>
  );
};

export default LableTitle;