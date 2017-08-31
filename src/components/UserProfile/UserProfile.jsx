import React from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import "./UserProfile.css";

const UserProfile = (props) => {
  console.log(props)
  let name, photoUrl, email;
  if (props.currentUser) {
    name = props.currentUser.displayName;
    photoUrl = props.currentUser.photoURL;
    email = props.currentUser.email;
  };
  return(
    <Card className="user-profile__container">
      <CardTitle title={name + "'s Profile"}/>
      <CardText className="row">
      <div className="one-third column">
        <Avatar
        src={photoUrl}
        size={200}
        />
      </div>
      <div className="two-thirds column">
        <h5>Email</h5>
        <p>{email}</p>
        <h5>Something Else</h5>
        <p>Something Else</p>
        <h5>Something Else</h5>
        <p>Something Else</p>
      </div>
      </CardText>
    </Card>
  )
}

export default UserProfile;

