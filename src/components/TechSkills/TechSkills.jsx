import React from 'react';
import { techSkills } from 'helpers/techSkills';
import { Image, List, Item } from './TechSkills.styled';

const TechSkills = () => {
  return (
    <List>
      {techSkills.map(({ label, icon, id }) => (
        <Item key={id}>
           <Image src={icon} alt={label} width={40} /><p>{label}</p>
        </Item>
      ))}
    </List>
  );
};

export default TechSkills;
