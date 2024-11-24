import React from 'react';

interface LinkLableProps {
  children: React.ReactNode;
  className?: string;
  link?: string;
}

const LinkLable: React.FC<LinkLableProps> = ({ children, className ,link }) => {
  return <a href={link} className={`${className}`}>{children} 
        <svg
        className="w-4 h-4 ml-1 border-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
    </a>;
};

export default LinkLable;
