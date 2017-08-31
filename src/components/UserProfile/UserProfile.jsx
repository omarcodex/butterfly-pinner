import React from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";

const UserProfile = (props) => {
  console.log(props)
  let name;
  if (props.currentUser) { name = props.currentUser.displayName };
  return(
    <Card>
      <CardTitle title="Profile"/>
      <CardText>
        <span>Name: {name}</span>
      </CardText>
    </Card>
  )
}

export default UserProfile;