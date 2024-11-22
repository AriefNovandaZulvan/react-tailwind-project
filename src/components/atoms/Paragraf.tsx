// src/components/atoms/Subtitle.tsx
import React from 'react';

interface ParagrafProps {
  text: string;
}

const Paragraf: React.FC<ParagrafProps> = ({ text }) => {
  return <p className="text-lg text-white">{text}</p>;
};

export default Paragraf;
