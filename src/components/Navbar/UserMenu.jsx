import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';

const UserMenu = props => {
  return (
    <IconMenu
      iconStyle={{ color: 'white' }}
      iconButtonElement={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
    >
      <Link to="/profile">
        <MenuItem primaryText="Profile" />
      </Link>
      <MenuItem primaryText="Log Out" onClick={props.handleSignout} />
    </IconMenu>
  );
};

export default UserMenu;
