import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ITEM_HEIGHT = 48;

const DropdownButton = ({ footerRef, homeRefs }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const projectsRef = homeRefs.current.projectsRef;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAboutClick = () => {
    setAnchorEl(null);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleProjectClick = () => {
    const top = projectsRef.current.offsetTop;
    setAnchorEl(null);
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  const handleFooterClick = () => {
    const top = footerRef.current.offsetTop;
    setAnchorEl(null);
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '30ch',
          },
        }}
      >
        <MenuItem onClick={handleAboutClick} className='menu-item'>
          About
        </MenuItem>
        <MenuItem onClick={handleProjectClick} className='menu-item'>
          Projects
        </MenuItem>
        <MenuItem onClick={handleFooterClick} className='menu-item'>
          Contact
        </MenuItem>
      </Menu>
    </div>
  );
};

DropdownButton.propTypes = {
  footerRef: PropTypes.object.isRequired,
  homeRefs: PropTypes.object.isRequired,
};

export default DropdownButton;
