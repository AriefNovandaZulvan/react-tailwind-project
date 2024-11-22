// src/components/organisms/MainContent.tsx
import React from 'react';
import Title from '../atoms/LableTitle';
import Subtitle from '../atoms/LableSubtitle';
import Callout from '../molecules/Callout';


const MainContent: React.FC = () => {
  return (
    <section className="flex flex-col space-y-6">
      <div>
        <span className="bg-blue-100 text-tealHome px-4 py-1 rounded-lg text-sm">
            풀타임, 파트타임
        </span>
      </div>
      <Title text="최고의 실력을 가진 외국인 인재를 찾고 계신가요?" isHighlight={false} />
      <Subtitle text="법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요." />
      <Subtitle text="개발자가 필요하신가요?" />
      <div className="grid grid-cols-3 gap-6">
        <Callout text="평균 월 120만원" description="임금을 해당 국가를 기준으로 계산합니다." />
        <Callout text="최대 3회 인터뷰" description="막상 채용해보니 맞지 않아도 걱정하지 마세요." />
        <Callout text="평균 3일, 최대 10일" description="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다." />
      </div>
    </section>
  );
};

export default MainContent;
