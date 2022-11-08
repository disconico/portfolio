import React from 'react';

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
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        fill='white'
        className='bi bi-chevron-double-up'
        viewBox='0 0 16 18'
      >
        <path
          fillRule='evenodd'
          d='M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z'
        />
        <path
          fillRule='evenodd'
          d='M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
        />
      </svg>
    </a>
  );
};

export default BackToTopBtn;
