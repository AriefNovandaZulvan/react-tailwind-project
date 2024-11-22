import React from 'react';

interface IconProps {
  children: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ children }) => {
  return <div className="text-4xl mb-4">{children}</div>;
};

export default Icon;
