import React from 'react';

interface ListSkillProps {
    index: number; // Use a stricter type instead of "any"
    task: React.ReactNode;
    className?: string;
}

const ListSkill: React.FC<ListSkillProps> = ({ index, task, className }) => {
  return (
    <li className={`${className}`}>
      {task}
    </li>
  );
};

export default ListSkill;
