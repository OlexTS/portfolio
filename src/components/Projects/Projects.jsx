import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Card } from './Projects.styled';
import { projects } from 'helpers/projects';
import { List } from 'components/Contacts/Contacts.styled';

const Projects = () => {
  return (
    <>
      <h1>MY PROJECTS</h1>
      <div>
        <div>
          <h2>TEAM PROJECTS</h2>
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
                    <div>
                      {technologies.map(el => (
                        <div>
                          <p>{el}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                )
              )}
          </List>
        </div>
        <div>
          <h2>PERSONAL PROJECTS</h2>
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
                    <div>
                      {technologies.map(el => (
                        <div>
                          <p>{el}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                )
              )}
          </List>
        </div>
      </div>
    </>
  );
};

export default Projects;
