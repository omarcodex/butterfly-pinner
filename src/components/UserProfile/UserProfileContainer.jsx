import React, { Component } from 'react';
import firebase, { auth } from '../../javascripts/firebase';

import UserProfile from './UserProfile';
import store from '../../store/configureStore';

class UserProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sightings: []
    };
  }

  componentDidMount() {
    let sightings;
    let ref = firebase
      .database()
      .ref()
      .child('sightings');
    // .child(auth.currentUser.uid);
    var that = this;
    ref.once('value').then(function(snap) {
      sightings = Object.values(snap.val());
      that.setState({
        sightings: sightings
      });
    });
  }

  render() {
    return (
      <div className="page">
        <UserProfile
          user={store.getState().user}
          sightings={this.state.sightings}
        />
      </div>
    );
  }
}

export default UserProfileContainer;
