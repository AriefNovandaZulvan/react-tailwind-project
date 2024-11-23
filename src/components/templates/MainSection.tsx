// src/components/templates/MainSection.tsx
import React from 'react';
import MainContent from '../organisms/MainContent';
import CardEmployerList from '../organisms/CardEmployerList';
import HighLightList from '../organisms/HighLightList';

import f1 from '../../../public/images/f-1.png'
import f2 from '../../../public/images/f-2.png'
import f3 from '../../../public/images/f-3.png'
import f4 from '../../../public/images/f-4.png'
import f5 from '../../../public/images/f-5.png'



const MainSection: React.FC = () => {
  const items = [
    { title: '해외 마케팅', image: f1.src },
    { title: '퍼블리셔', image: f2.src },
    { title: '캔드원(제조사)', image:f3.src },
    { title: '해외 세일즈', image:f4.src },
    { title: '해외 CS', image: f5.src },
  ];
  return (
    <section className="py-16">
      <div className="m-auto container block md:flex md:flex-row gap-4 items-center w-8/12">
        <div className="flex-1 w-full md:w-6/12 ">
          <MainContent />
        </div>
        <div className="flex-1 w-full md:w-6/12 h-full card-list">
          <CardEmployerList />
        </div>
      </div>
      <div className="bg-gradient-to-r py-8 w-10/12 m-auto mr-0 relative">
        <div className="p-0 justify-start animate-fadeIn duration-500">
          <HighLightList items={items} />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
