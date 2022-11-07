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
          <h1>Hello it&apos;s me !</h1>
          <h2>
            I&apos;m <span className='underline--magical'>Nicolas</span>, alias
            <span className='underline--magical'> disconico</span>, a 29 years
            old full-stack developer and I&apos;m currently learning{' '}
            <span className='underline--magical'>React</span> &{' '}
            <span className='underline--magical'>NodeJS</span>.{' '}
          </h2>
          <h3>
            Check my awesome projects by clicking the link bellow &#x2B07;
          </h3>
          <span className='button-span' onClick={handleClick}>
            <span></span>
          </span>
        </div>
      </div>
      <div className='main-projects' ref={projectsRef}>
        {projectCards}
      </div>
    </main>
  );
});

export default Home;
