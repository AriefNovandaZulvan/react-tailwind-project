import React from 'react';
import Paragraf from '../atoms/Paragraf';
import SpanText from '../atoms/SpanText';

interface CalloutProps {
  text: string;
  description: string;
}

const Callout: React.FC<CalloutProps> = ({ text, description }) => {
  return (
    <div className="flex flex-col text-white border-t-2 animate-fadeIn duration-500">
      <SpanText className="text-2xl font-bold text-white my-3" children={text}/>
      <Paragraf text={description}/>
    </div>
  );
};

export default Callout;
