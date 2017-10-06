import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

const SlideOutMenu = props => {
  return (
    <Drawer
      docked={false}
      width={200}
      open={props.open}
      onRequestChange={props.handleToggle}
    >
      <Link to="/">
        <MenuItem
          onClick={props.handleClose}
          leftIcon={<FontIcon className="material-icons">home</FontIcon>}
        >
          Home
        </MenuItem>
      </Link>
      <Link to="/guide">
        <MenuItem
          onClick={props.handleClose}
          leftIcon={<FontIcon className="material-icons">style</FontIcon>}
        >
          Guide
        </MenuItem>
      </Link>
      <Link to="/sighting">
        <MenuItem
          onClick={props.handleClose}
          leftIcon={<FontIcon className="material-icons">party_mode</FontIcon>}
        >
          Sighting
        </MenuItem>
      </Link>
      <Link to="/profile">
        <MenuItem
          onClick={props.handleClose}
          leftIcon={
            <FontIcon className="material-icons">perm_identity</FontIcon>
          }
        >
          Profile
        </MenuItem>
      </Link>
    </Drawer>
  );
};

export default SlideOutMenu;
