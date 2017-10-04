import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import SightingList from './SightingList';

const UserProfile = props => {
  return (
    <Card>
      <CardTitle title={props.user.displayName + "'s Profile"} />
      <CardText className="row">
        <div className="one-third column">
          <Avatar src={props.user.photoURL} size={100} />
        </div>
        <div className="two-thirds column" />
        <hr />
        <SightingList sightings={props.sightings} />
      </CardText>
    </Card>
  );
};

export default UserProfile;
