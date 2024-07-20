import React from 'react';
import hero from '../../images/hero.png';
import { Hero, MainTitle, Text, Box, Skills, Title } from './HomeView.styled';
import TechSkills from 'components/TechSkills/TechSkills';

const HomeView = () => {
  return (
    <main>
      <Hero>
        <Box>
          <MainTitle>Hello everyone!!!</MainTitle>
          <Text>My name is Olexandr and I'm a Frontend Developer!</Text>
        </Box>
        <div>
          <img src={hero} alt="Olexandr Tsapuk" width={460} />
        </div>
      </Hero>
      <Skills>
        <Title>MY TECH SKILLS</Title>
        <TechSkills />
      </Skills>
    </main>
  );
};

export default HomeView;
