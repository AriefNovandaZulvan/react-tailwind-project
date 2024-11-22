// src/components/organisms/Slider.tsx
'use client'; // This must also be a Client Component

import React from 'react';
import TightCarousel from '../molecules/TightCarousel';
import SliderCard from '../molecules/SliderCard';
import "../../styles/tight-carousel.css";


const Slider: React.FC = () => {
  const sampleData = [
    {
        name: 'Abhishek Gupta',
        position: '마케팅',
        experience: '2y+',
        tasks: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
        image: 'https://placehold.co/100x100',
        flag: '🇮🇳',
    },
    {
        name: 'Abhishek Gupta',
        position: '마케팅',
        experience: '2y+',
        tasks: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
        image: 'https://placehold.co/100x100',
        flag: '🇮🇳',
    },
    {
        name: 'Abhishek Gupta',
        position: '마케팅',
        experience: '2y+',
        tasks: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
        image: 'https://placehold.co/100x100',
        flag: '🇮🇳',
    },
    {
        name: 'Abhishek Gupta',
        position: '마케팅',
        experience: '2y+',
        tasks: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
        image: 'https://placehold.co/100x100',
        flag: '🇮🇳',
    },
  ];

  return (
    <section className="mx-auto w-12/12">
        <TightCarousel>
            {sampleData.map((data, index) => (
                <div key={index}>
                    <SliderCard
                    name={data.name}
                    position={data.position}
                    experience={data.experience}
                    tasks={data.tasks}
                    image={data.image}
                    flag={data.flag}
                    />
                </div>
            ))}
        </TightCarousel>
    </section>
  );
};

export default Slider;
