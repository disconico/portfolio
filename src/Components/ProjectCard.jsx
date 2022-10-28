import React from 'react';
import PropTypes from 'prop-types';

import logos from '../assets/logos/logos';
import externalLogos from '../assets/logos/externalLogos';

const ProjectCard = ({ project }) => {
  const { name, description, src, techs, githubLink, hostingLink } = project;
  const { github, link } = externalLogos;

  const getTechsLogos = () => {
    const logoArray = [];
    for (const tech in techs) {
      if (techs[tech]) {
        const newLogo = { logo: logos[tech], key: tech };
        logoArray.push(newLogo);
      }
    }
    const logosToDisplay = logoArray.map((logo) => {
      return <i key={logo.key}>{logo.logo}</i>;
    });
    return logosToDisplay;
  };

  return (
    <div className='project-card'>
      <div className='project-card--img-container'>
        <a href={hostingLink} target='_blank' rel='noreferrer'>
          <img src={src} draggable={false} alt={`${name} screenshot`} />
        </a>
      </div>
      <div className='project-card--info-container'>
        <div className='project-card--name-and-icons'>
          <h2>{name}</h2>
          <div className='project-card--icons'>
            <a href={githubLink} target='_blank' rel='noreferrer'>
              {github}
            </a>
            <a href={hostingLink} target='_blank' rel='noreferrer'>
              {link}
            </a>
          </div>
        </div>
        <h3 className='project-card--description'>{description}</h3>
        <div className='project-card--techs'>{getTechsLogos()}</div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
