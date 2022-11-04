import React, { forwardRef } from 'react';
import externalLogos from '../assets/logos/externalLogos';

// eslint-disable-next-line react/display-name
const Footer = forwardRef((props, ref) => {
  const { github, linkedin } = externalLogos;
  return (
    <footer ref={ref} className='footer'>
      <div className='footer--desc'>
        <h2>Contact me</h2>
      </div>
      <div className='footer--infos'>
        <div className='footer--email'>
          <a href='mailto:guerin-nicolas@outlook.com'>
            guerin-nicolas@outlook.com
          </a>
        </div>
        <div className='footer--icons'>
          <a
            href={'https://github.com/disconico'}
            target='_blank'
            rel='noreferrer'
            className='footer-icon'
          >
            {github}
          </a>
          <a
            href={'https://www.linkedin.com/in/nicolas-gu%C3%A9rin-7a2983b6/'}
            target='_blank'
            rel='noreferrer'
            className='footer-icon'
          >
            {linkedin}
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
