import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';

import projectList from '../projectList';

const Home = () => {
  const projectCards = projectList.map((project, index) => {
    return <ProjectCard key={index} project={project} />;
  });

  const portFolioRef = useRef(null);
  const handleClick = () => {
    portFolioRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <div className='main-about'>
        <div className='main-about--photo'>
          <h2>Hello its me</h2>
        </div>
        <div className='main-about--desc'>
          <div>
            <h2>Hello its me</h2>
            <button onClick={handleClick}>Portfolio</button>
          </div>
        </div>
      </div>
      <div className='main-projects' ref={portFolioRef}>
        {projectCards}
      </div>
    </main>
  );
};

export default Home;
