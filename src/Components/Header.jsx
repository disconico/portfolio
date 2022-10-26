import React from 'react';
import { Link } from 'react-router-dom';
import DropdownButton from './DropdownButton';

import useWindowSize from '../hooks/useWindowSize';

const Header = () => {
  const { width } = useWindowSize();
  return (
    <header>
      <div className='header-left'>
        <Link to={'/'}>Coucou</Link>
      </div>
      {width > 800 && <div className='header-right'>Lien </div>}
      {width <= 800 && (
        <div className='header-right'>
          {<DropdownButton />}
        </div>
      )}
    </header>
  );
};

export default Header;
