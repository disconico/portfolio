import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DropdownButton from './DropdownButton';

import useWindowSize from '../hooks/useWindowSize';

import logo from '../assets/logo.png';

const Header = () => {
  const { width } = useWindowSize();
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);

  return (
    <header>
      <div className='header-left'>
        <Link to={'/'}>
          <img src={logo} className='header--logo' />
        </Link>
      </div>
      {width > 800 && (
        <div className='header-right'>
          <Link to='/'>
            <button
              className={`header--btn ${
                pathname === '/' ? 'active-tab' : undefined
              }`}
            >
              Portfolio
            </button>
          </Link>
          <Link to='/contact'>
            <button
              className={`header--btn ${
                pathname === '/contact' ? 'active-tab' : undefined
              }`}
            >
              Contact
            </button>
          </Link>
          <Link to='/about'>
            <button
              className={`header--btn ${
                pathname === '/about' ? 'active-tab' : undefined
              }`}
            >
              About
            </button>
          </Link>
        </div>
      )}
      {width <= 800 && <div className='header-right'>{<DropdownButton />}</div>}
    </header>
  );
};

export default Header;
