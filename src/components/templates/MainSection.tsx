// src/components/templates/MainSection.tsx
import React from 'react';
import MainContent from '../organisms/MainContent';
import CardList from '../organisms/CardList';
import HomeBottomList from '../organisms/IconButtonList';


const MainSection: React.FC = () => {
  const items = [
    { title: '해외 마케팅', icon: '📷' },
    { title: '퍼블리셔', icon: '🖋️' },
    { title: '캔드원(제조사)', icon: '📦' },
    { title: '해외 세일즈', icon: '🌍' },
    { title: '해외 CS', icon: '📞' },
  ];
  return (
    <section className="bg-gradient-to-r py-16 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex-1 w-6/12">
          <MainContent />
        </div>

        {/* Right Section */}
        <div className="flex-1 w-6/12">
          <CardList />
        </div>
      </div>
      <div className="bg-gradient-to-r  py-8">
        <div className="container mx-auto">
          <HomeBottomList items={items} />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
