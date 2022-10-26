import React from 'react';
import ProjectCard from './ProjectCard';

import projectList from '../projectList';

const Home = () => {
  const projectCards = projectList.map((project, index) => {
    return <ProjectCard key={index} project={project} />;
  });

  return <main className='main-projects'>{projectCards}</main>;
};

export default Home;
