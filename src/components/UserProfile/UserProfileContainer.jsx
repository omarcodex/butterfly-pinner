import React, { Component } from "react";
import firebase from "../../javascripts/firebase";

import UserProfile from "./UserProfile";

class UserProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: firebase.auth().currentUser
    };
  }

  render() {
    // console.log(this.state);
    return(
      <div className="page">
        <UserProfile currentUser={this.state.currentUser} />
      </div>
    )
  }
}

export default UserProfileContainer;