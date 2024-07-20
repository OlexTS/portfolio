import React from 'react';
import { techSkills } from 'helpers/techSkills';
import { Image, List } from './TechSkills.styled';

const TechSkills = () => {
  return (
    <List>
      {techSkills.map(({ label, icon, id }) => (
        <li key={id}>
           <Image src={icon} alt={label} width={40} /><p>{label}</p>
        </li>
      ))}
    </List>
  );
};

export default TechSkills;
