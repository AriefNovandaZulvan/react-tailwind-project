import React from 'react';
import NavLink from '../atoms/NavigationLink';

const Navigation: React.FC = () => {
  return (
    <nav className="flex space-x-8">
      <NavLink label="채용" href="#" />
      <NavLink label="해외 개발자 활용 서비스" href="#" />
    </nav>
  );
};

export default Navigation;