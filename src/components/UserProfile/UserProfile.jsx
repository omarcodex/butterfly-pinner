import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import SightingList from '../SightingList';

const UserProfile = props => {
  return (
    <Card>
      <CardTitle title={props.user.displayName + "'s Profile"} />
      <CardText>
        <div>
          <Avatar src={props.user.photoURL} size={100} />
        </div>
        <div />
        <hr />
        <SightingList sightings={props.sightings} />
      </CardText>
    </Card>
  );
};

export default UserProfile;
