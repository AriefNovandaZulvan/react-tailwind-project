// src/components/organisms/Slider.tsx
'use client'; // This must also be a Client Component

import React from 'react';
import TightCarousel from '../molecules/TightCarousel';
import SliderCard from '../molecules/EmployerCard';
import "../../styles/tight-carousel.css";
import { Employer } from '@/types/homeTypes';

interface CardEmployerListProps {
    employer: Employer[];
  }

const CardEmployerList: React.FC<CardEmployerListProps>  = ({employer}) => {
  return (
    <section className="m-auto mr-0 w-full md:w-11/12">
        <TightCarousel>
            {employer.map((data, index) => (
                <div key={index}>
                    <SliderCard
                    id={data.id}
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

export default CardEmployerList;
