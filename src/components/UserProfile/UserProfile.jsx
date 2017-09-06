import React from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import SightingList from "./SightingList";
import "./UserProfile.css";

const UserProfile = (props) => {
  let name, photoUrl, email;
  if (props.user) {
    name = props.user.displayName;
    photoUrl = props.user.photoURL;
    email = props.user.email;
  };
  return(
    <Card className="user-profile__container">
      <CardTitle title={name + "'s Profile"}/>
      <CardText className="row">
      <div className="one-third column">
        <Avatar
        src={photoUrl}
        size={100}
        />
      </div>
      <div className="two-thirds column">
      </div>
      <hr />
      <SightingList sightings={props.sightings}/>
      </CardText>
    </Card>
  )
}

export default UserProfile;

