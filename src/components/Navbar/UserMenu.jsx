import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';

import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/navigation/expand-more';

const UserMenu = props => {
  return (
    <IconMenu
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      iconButtonElement={
        <RaisedButton
          label={`Logged in as ${props.user.displayName}`}
          labelPosition="before"
          secondary={true}
          icon={<ActionAndroid />}
        />
      }
    >
      <MenuItem primaryText="Log Out" onClick={props.handleSignout} />
    </IconMenu>
  );
};

export default UserMenu;
