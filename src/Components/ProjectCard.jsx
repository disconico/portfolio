import React from 'react';
import PropTypes from 'prop-types';

import logos from '../assets/logos';

const ProjectCard = ({ project }) => {
  const { name, description, src, techs } = project;
  const { firebase, css, github } = logos;
  return (
    <div className='project-card'>
      <div className='project-card--img-container'>
        <img src={src} />
      </div>
      <div className='project-card--name-and-icons'>
        <h2>{name}</h2>
        <div className='project-card--icons'></div>
      </div>
      <h3>{description}</h3>
      <div className='project-card--techs'>{techs.firebase && firebase}</div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
