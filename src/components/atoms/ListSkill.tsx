import React from 'react';

interface ListSkillProps {
    index: any;
    task: React.ReactNode;
    className?: string;
}

const ListSkill: React.FC<ListSkillProps> = ({ index, task, className }) => {
  return <li
    key={index} className={`${className}`}>
        {task}
    </li>;
};

export default ListSkill;
