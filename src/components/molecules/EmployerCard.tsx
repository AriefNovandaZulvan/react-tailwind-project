// src/components/atoms/SliderCard.tsx
import React from 'react';
import ImagePlacer from '../atoms/ImagePlacer';
import LableSubtitle from '../atoms/LableSubtitle';
import SpanText from '../atoms/SpanText';
import ListSkill from '../atoms/ListSkill';
import profile from '../../../public/images/pp.png'

interface EmployerCardProps {
  name: string;
  position: string;
  experience: string;
  tasks: string[];
  image: string;
  flag: string;
}

const EmployerCard: React.FC<EmployerCardProps> = ({ name, position, experience, tasks, image, flag }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full text-center p-8">
      <div className='relative w-24 h-24 rounded-full mx-auto mb-8'>
        <span className="absolute bottom-0 right-0 ">
          <span role="img" aria-label="flag">
            {flag}
        </span>
        </span>
        <ImagePlacer
          source={profile.src}
          alt={`${name}'s profile picture`}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
      </div>
      <LableSubtitle text={name} className='text-black font-extrabold mb-8' />
      <SpanText className="text-blue-500 font-medium text-lg">${position}</SpanText> 
      <SpanText className="text-blue-500 font-medium text-lg"> . ${experience}</SpanText>
      <ul className="mt-4 space-y-2">
        {tasks.map((task, index) => (
          <ListSkill index={index} className="text-sm border-2 py-1 px-3  inline-block" task={task}/>
        ))}
      </ul>
    </div>
  );
};

export default EmployerCard;