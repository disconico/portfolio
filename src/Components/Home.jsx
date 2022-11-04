/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import ProjectCard from './ProjectCard';

import projectList from '../projectList';
import arrow from '../assets/arrow.svg';

const Home = forwardRef((props, ref) => {
  const projectCards = projectList.map((project, index) => {
    return <ProjectCard key={index} project={project} />;
  });

  const { aboutRef, projectsRef } = ref.current;

  const handleClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <div className='main-about' ref={aboutRef}>
        <div className='main-about--photo'></div>
        <img src={arrow} className='arrow' draggable={false}></img>
        <div className='main-about--desc'>
          <div>
            <h2>Hello its me</h2>
            <span className='button-span' onClick={handleClick}>
              <span></span>
            </span>
          </div>
        </div>
      </div>
      <div className='main-projects' ref={projectsRef}>
        {projectCards}
      </div>
    </main>
  );
});

export default Home;
