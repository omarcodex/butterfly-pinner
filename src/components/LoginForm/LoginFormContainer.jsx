import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import firebase from '../../javascripts/firebase';
import { loginUser } from '../../actions/userActions';
import store from '../../store/configureStore';

import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    this.handleTwitterLogin = this.handleTwitterLogin.bind(this);
    this.handleNotification = this.handleNotification.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
    this.state = {
      email: '',
      password: '',
      notificationOpen: false,
      notificationMessage: ''
    };
  }

  handleChange(e) {
    const val = e.target.value;
    const attr = e.target.getAttribute('data-target-field');
    this.setState({
      [attr]: val
    });
  }

  handleLogin(e) {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    );
    promise.catch(e => console.log(e.message));
    promise.then(response => {
      console.log(response);
      this.handleNotification('Succesfully signed in!');
    });
  }

  handleSignup(e) {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    );
    promise.catch(e => console.log(e.message));
  }

  handleSignout(e) {
    const promise = firebase.auth().signOut();
    promise.then(e => this.handleNotification('Succesfully logged out!'));
  }

  handleNotification(message) {
    this.setState({
      notificationOpen: true,
      notificationMessage: message
    });
  }

  handleNotificationClose() {
    this.setState({
      notificationOpen: false
    });
  }

  handleGoogleLogin(e) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        let args = {
          user: result.user,
          token: result.credential.accessToken
        };
        store.dispatch(loginUser(args));
        this.props.triggerRedirect();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleTwitterLogin(e) {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        let args = {
          user: result.user,
          token: result.credential.accessToken
        };
        store.dispatch(loginUser(args));
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            data-target-field="email"
            hintText="Email"
            fullWidth={true}
            onChange={this.handleChange}
          />
          <TextField
            data-target-field="password"
            hintText="Password"
            fullWidth={true}
            type="password"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <RaisedButton
            label="Log in"
            primary={true}
            onClick={this.handleLogin}
            fullWidth={true}
            labelStyle={{ textTransform: 'capitalize', fontSize: '1em' }}
          />
          <br />
          <br />
          <RaisedButton
            label="Sign up"
            backgroundColor="#A7EB81"
            onClick={this.handleSignup}
            fullWidth={true}
            labelStyle={{ textTransform: 'capitalize', fontSize: '1em' }}
          />
        </div>
        <hr />
        <RaisedButton
          label="Log in with Google"
          primary={true}
          onClick={this.handleGoogleLogin}
          buttonStyle={{ marginRight: '5px' }}
          labelStyle={{ textTransform: 'capitalize', fontSize: '1em' }}
        />
        <RaisedButton
          label="Log in with Twitter"
          primary={true}
          onClick={this.handleTwitterLogin}
          buttonStyle={{ marginLeft: '5px' }}
          labelStyle={{ textTransform: 'capitalize', fontSize: '1em' }}
        />
        <Snackbar
          open={this.state.notificationOpen}
          message={this.state.notificationMessage}
          autoHideDuration={4000}
          onRequestClose={this.handleNotificationClose}
        />
      </div>
    );
  }
}

export default LoginFormContainer;
