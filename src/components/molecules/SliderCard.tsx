// src/components/atoms/SliderCard.tsx
import React from 'react';

interface SliderCardProps {
  name: string;
  position: string;
  experience: string;
  tasks: string[];
  image: string;
  flag: string;
}

const SliderCard: React.FC<SliderCardProps> = ({ name, position, experience, tasks, image, flag }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-12/12  text-center">
      <img
        src={image}
        alt={`${name}'s profile picture`}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-blue-500 font-medium">{`${position} • ${experience}`}</p>
      <div className="flex justify-center items-center mt-2">
        <span className="inline-block w-6 h-6 rounded-full overflow-hidden">
          <span role="img" aria-label="flag">
            {flag}
          </span>
        </span>
      </div>
      <ul className="mt-4 space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="text-sm bg-blue-100 text-blue-600 py-1 px-3 rounded-full inline-block"
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderCard;
