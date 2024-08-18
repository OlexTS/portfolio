import React from 'react';
import hero from '../../images/hero.webp';
import {
  Hero,
  MainTitle,
  Text,
  Box,
  Skills,
  Title,
  MyContacts,
} from './HomeView.styled';
import TechSkills from 'components/TechSkills/TechSkills';
import Contacts from 'components/Contacts/Contacts';

const HomeView = () => {
  return (
    <main>
      <Hero>
        <Box>
          <MainTitle>Hello everyone!!!</MainTitle>
          <Text>My name is Olexandr and I am a Frontend Developer!</Text>
        </Box>
        <div>
          <img src={hero} alt="Olexandr Tsapuk" width={460} />
        </div>
      </Hero>
      <Skills>
        <Title>MY TECH SKILLS</Title>
        <TechSkills />
      </Skills>
      <MyContacts>
        <Title>MY CONTACTS</Title>
        <Contacts/>
      </MyContacts>
    </main>
  );
};

export default HomeView;
