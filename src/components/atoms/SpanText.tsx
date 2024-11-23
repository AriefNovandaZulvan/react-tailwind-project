import React from 'react';

interface SpanTextProps {
  children: React.ReactNode;
  className?: string;
}

const SpanText: React.FC<SpanTextProps> = ({ children, className }) => {
  return <span className={`text-black ${className}`}>{children}</span>;
};

export default SpanText;
