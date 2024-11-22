import React from 'react';

interface SpanSmallProps {
  children: React.ReactNode;
  className?: string;
}

const SpanSmall: React.FC<SpanSmallProps> = ({ children, className }) => {
  return <span className={`text-sm ${className}`}>{children}</span>;
};

export default SpanSmall;
