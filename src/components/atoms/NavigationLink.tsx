import React from 'react';

interface NavLinkProps {
  label: string;
  href: string;
}

const NavigationLink: React.FC<NavLinkProps> = ({ label, href }) => {
  return (
    <a href={href} className="text-white hover:text-gray-200 text-sm">
      {label}
    </a>
  );
};

export default NavigationLink;
