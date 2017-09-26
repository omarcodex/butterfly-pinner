import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import SightingList from './SightingList';
import './UserProfile.css';

const UserProfile = props => {
  let name, photoUrl, email, uid;
  if (props.user) {
    name = props.user.displayName;
    photoUrl = props.user.photoURL;
    email = props.user.email;
    uid = props.user.uid;
  }
  return (
    <Card className="user-profile__container">
      <CardTitle title={name + "'s Profile"} />
      <CardText className="row">
        <div className="one-third column">
          <Avatar src={photoUrl} size={100} />
        </div>
        <div className="two-thirds column" />
        <hr />
        <SightingList sightings={props.sightings} />
      </CardText>
    </Card>
  );
};

export default UserProfile;
