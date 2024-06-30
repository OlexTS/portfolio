import React from 'react';
import hero from '../../images/hero.png';
import { Hero, MainTitle, Text, Box } from './HomeView.styled';

const HomeView = () => {
  return (
    <main>
      <Hero>
        <Box>
          <MainTitle>Hello everyone!!!</MainTitle>
          <Text>My name is Olexandr and I'm a Frontend Developer!</Text>
        </Box>
        <div>
          <img src={hero} alt="Olexandr Tsapuk" width={460}/>
        </div>
      </Hero>
    </main>
  );
};

export default HomeView;
