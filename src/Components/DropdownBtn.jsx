import React, { useState, cloneElement } from 'react';
import PropTypes from 'prop-types';

import useOutsideClick from '../hooks/useOutsideClick';

const DropdownBtn = ({ trigger, menu }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOutsideClick = () => {
    setOpen(false);
  };

  const ref = useOutsideClick(handleOutsideClick);

  return (
    <div className='dropdown' ref={ref}>
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className='menu'>
          {menu.map((menuItem, index) => (
            <li key={index} className='menu-item'>
              {cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

DropdownBtn.propTypes = {
  trigger: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
};

export default DropdownBtn;

// https://www.robinwieruch.de/react-dropdown/
