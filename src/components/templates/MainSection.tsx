import React from 'react';
import MainContent from '../organisms/MainContent';
import CardEmployerList from '../organisms/CardEmployerList';
import HighLightList from '../organisms/HighLightList';
import { Highlight, Employer } from '@/types/homeTypes';

interface MainSectionProps {
  highlights: Highlight[];
  employers: Employer[];
}

const MainSection: React.FC<MainSectionProps> = ({ highlights, employers }) => {
  return (
    <section className="py-16">
      <div className="m-auto container block md:flex md:flex-row gap-4 items-center w-full md:w-8/12">
        <div className="flex-1 w-full md:w-6/12">
          <MainContent />
        </div>
        <div className="flex-1 w-full md:w-6/12 h-full card-list">
          <CardEmployerList employer={employers}/>
        </div>
      </div>
      <div className="bg-gradient-to-r py-8 w-full md:w-10/12 m-auto mr-0 relative">
        <div className="p-0 justify-start animate-fadeIn duration-500">
          <HighLightList highlights={highlights} />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
