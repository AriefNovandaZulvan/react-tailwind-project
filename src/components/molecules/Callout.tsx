import React from 'react';
import Paragraf from '../atoms/Paragraf';

interface CalloutProps {
  text: string;
  description: string;
}

const Callout: React.FC<CalloutProps> = ({ text, description }) => {
  return (
    <div className="flex flex-col text-white">
      <span className="text-2xl font-bold">{text}</span>
      <Paragraf text={description}/>
    </div>
  );
};

export default Callout;
