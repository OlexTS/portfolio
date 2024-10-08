import React from 'react';
import { nanoid } from 'nanoid';
import { FaGithub } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import {
  List,
  Card,
  ProjectsBox,
  Title,
  TeamProjectsBox,
  CardTitle,
  ListTechnologies,
  ItemThechnology,
  LinkContainer,Image, Link, Description
} from './Projects.styled';
import { projects } from 'helpers/projects';
import ScrollButton from 'components/ScrollButton/ScrollButton';

const Projects = () => {
  return (
    <>
      <ProjectsBox>
        <TeamProjectsBox>
          <Title>TEAM PROJECTS</Title>
          <List>
            {projects
              .filter(el => el.workDetails === 'Team project')
              .map(
                ({
                  id,
                  label,
                  codeLink,
                  siteLink,
                  description,
                  workDetails,
                  technologies,
                  image,
                }) => (
                  <Card key={id}>
                    <CardTitle>{label}</CardTitle>
                    <Image src={image} width={500} height={400} alt={label} />
                    <LinkContainer>
                      <Link href={codeLink}>
                        <FaGithub size={30} />
                      </Link>
                      <Link href={siteLink}>
                        <FaExternalLinkAlt size={30} />
                      </Link>
                    </LinkContainer>
                    <Description>{description}</Description>
                    <ListTechnologies>
                      {technologies.map(el => (
                        <ItemThechnology key={nanoid()}>
                          <p>{el}</p>
                        </ItemThechnology>
                      ))}
                    </ListTechnologies>
                  </Card>
                )
              )}
          </List>
        </TeamProjectsBox>
        <div>
          <Title>PERSONAL PROJECTS</Title>
          <List>
            {projects
              .filter(el => el.workDetails === 'Personal project')
              .map(
                ({
                  id,
                  label,
                  codeLink,
                  siteLink,
                  description,
                  workDetails,
                  technologies,
                  image,
                }) => (
                  <Card key={id}>
                    <CardTitle>{label}</CardTitle>
                    <Image src={image} width={500} height={400} alt={label} />
                    <LinkContainer>
                      <Link href={codeLink}>
                        <FaGithub size={30} />
                      </Link>
                      <Link href={siteLink}>
                        <FaExternalLinkAlt size={30} />
                      </Link>
                    </LinkContainer>
                    <Description>{description}</Description>
                    <ListTechnologies>
                      {technologies.map(el => (
                        <ItemThechnology key={nanoid()}>
                          <p>{el}</p>
                        </ItemThechnology>
                      ))}
                    </ListTechnologies>
                  </Card>
                )
              )}
          </List>
        </div>
      </ProjectsBox>
      <ScrollButton />
    </>
  );
};

export default Projects;
