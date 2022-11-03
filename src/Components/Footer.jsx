import React, { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref}>
      <div className='footer'>Adios</div>
    </footer>
  );
});

export default Footer;
