import React from 'react';
import PropTypes from 'prop-types';
import useWindowSize from '../hooks/useWindowSize';
import useScrollDirection from '../hooks/useScrollDirection';
import DropdownBtn from '../Components/DropdownBtn';

import logo from '../assets/logov3.png';

const Header = ({ footerRef, homeRefs }) => {
  const { width } = useWindowSize();
  const scrollDirection = useScrollDirection();

  // const aboutRef = homeRefs.current.aboutRef;
  const projectsRef = homeRefs.current.projectsRef;

  const handleFooterClick = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleAboutClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handleProjectClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const dropdownMenu = [
    <button onClick={handleAboutClick} key='1'>
      About
    </button>,
    <button onClick={handleProjectClick} key='2'>
      Projects
    </button>,
    <button onClick={handleFooterClick} key='3'>
      Contact
    </button>,
  ];

  return (
    <header className={`header ${scrollDirection === 'up' ? 'show' : 'hide'}`}>
      <div className='header-left'>
        <img src={logo} className='header--logo' draggable='false' />

        {width > 800 && (
          <>
            {' '}
            <h1>-</h1>
            <h1 className='header--title'>THE @DISCONICO PORTFOLIO</h1>
          </>
        )}
      </div>

      {width > 800 && (
        <div className='header-right'>
          <button className='header--btn' onClick={handleAboutClick}>
            About
          </button>
          <button className='header--btn' onClick={handleProjectClick}>
            Projects
          </button>
          <button className='header--btn' onClick={handleFooterClick}>
            Contact
          </button>
        </div>
      )}
      {width <= 800 && (
        <DropdownBtn trigger={<button>⋮</button>} menu={dropdownMenu} />
      )}
    </header>
  );
};

Header.propTypes = {
  footerRef: PropTypes.object.isRequired,
  homeRefs: PropTypes.object.isRequired,
};

export default Header;
