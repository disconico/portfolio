import React from 'react';
import Icon from '@mdi/react';
import { mdiChevronDoubleUp } from '@mdi/js';

import useScrollPosition from '../hooks/useScrollPosition';

const BackToTopBtn = () => {
  const scrollPosition = useScrollPosition();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      className={`back-button ${scrollPosition > 600 && 'show'}`}
      onClick={handleClick}
    >
      <Icon path={mdiChevronDoubleUp} color={'white'} />
    </a>
  );
};

export default BackToTopBtn;
