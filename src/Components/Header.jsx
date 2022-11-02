import React from 'react';
import PropTypes from 'prop-types';
import DropdownButton from './DropdownButton';

import useWindowSize from '../hooks/useWindowSize';

import logo from '../assets/logov2.png';

const Header = ({ footerRef }) => {
  const { width } = useWindowSize();
  // const location = useLocation();
  const pathname = location.pathname;

  const handleClick = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <div className='header-left'>
        <img src={logo} className='header--logo' />
      </div>
      {width > 800 && (
        <div className='header-right'>
          <button
            className={`header--btn ${
              pathname === '/' ? 'active-tab' : undefined
            }`}
          >
            Portfolio
          </button>
          <button
            className={`header--btn ${
              pathname === '/contact' ? 'active-tab' : undefined
            }`}
          >
            Contact
          </button>
          <button
            className={`header--btn ${
              pathname === '/about' ? 'active-tab' : undefined
            }`}
            onClick={handleClick}
          >
            About
          </button>
        </div>
      )}
      {width <= 800 && <div className='header-right'>{<DropdownButton />}</div>}
    </header>
  );
};

Header.propTypes = {
  footerRef: PropTypes.object.isRequired,
};

export default Header;
