import React from 'react';
import { nanoid } from 'nanoid';
import { FaGithub } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Card, ProjectsBox, Title, TeamProjectsBox } from './Projects.styled';
import { projects } from 'helpers/projects';
import { List } from 'components/Contacts/Contacts.styled';
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
                    <p>{label}</p>
                    <img src={image} width={700} alt={label} />
                    <div>
                      <a href={codeLink}>
                        <FaGithub size={40} />
                      </a>
                      <a href={siteLink}>
                        <FaExternalLinkAlt size={40} />
                      </a>
                    </div>
                    <div>{description}</div>
                    <ul>
                      {technologies.map(el => (
                        <li key={nanoid()}>
                          <p>{el}</p>
                        </li>
                      ))}
                    </ul>
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
                    <p>{label}</p>
                    <img src={image} width={700} alt={label} />
                    <div>
                      <a href={codeLink}>
                        <FaGithub size={40} />
                      </a>
                      <a href={siteLink}>
                        <FaExternalLinkAlt size={40} />
                      </a>
                    </div>
                    <div>{description}</div>
                    <ul>
                      {technologies.map(el => (
                        <li key={nanoid()}>
                          <p>{el}</p>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )
              )}
          </List>
        </div>
      </ProjectsBox>
      <ScrollButton/>
    </>
  );
};

export default Projects;
