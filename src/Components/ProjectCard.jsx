import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  const { id, name, description, date } = project;
  return (
    <div className='project-card'>
      <h2>{name}</h2>
      <h3>{description}</h3>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
