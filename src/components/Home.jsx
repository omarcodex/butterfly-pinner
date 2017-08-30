import React, { Component } from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Snackbar from "material-ui/Snackbar";
import firebase from "../javascripts/firebase";

class Home extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    this.handleNotification = this.handleNotification.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
    this.state={
      email: "",
      password: "",
      notificationOpen: false,
      notificationMessage: ""
    }
  }

  handleChange(e) {
    const val = e.target.value
    const attr = e.target.getAttribute("data-target-field")
    this.setState({
      [attr]: val
    });
  }

  handleLogin(e) {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.password);
    promise.catch( e => console.log(e.message) );
    promise.then( e => this.handleNotification("Succesfully signed in!") )
  }

  handleSignup(e) {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
    promise.catch( e => console.log(e.message) );
  }

  handleSignout(e) {
    const promise = firebase.auth().signOut();
    promise.then( e => this.handleNotification("Succesfully logged out!") );
  }

  handleNotification(message) {
    this.setState({
      notificationOpen: true,
      notificationMessage: message
    });
  }

  handleNotificationClose() {
    this.setState({
      notificationOpen: false,
    });
  };

  handleGoogleLogin(e) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // var token = result.credential.accessToken;
      // var user = result.user;
      this.handleNotification("Succesfully signed in!");
    }).catch(function(error) {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // var email = error.email;
      // var credential = error.credential;
    });
    
  }

  render(){
    return(
      <Card>
        <CardTitle>Welcome!</CardTitle>
        <CardText>
          <TextField
            id="authenticator__email-field"
            data-target-field="email"
            hintText="Email"
            fullWidth={true}
            onChange={this.handleChange}
          />
          <TextField
            id="authenticator__password-field"
            data-target-field="password"
            hintText="Password"
            fullWidth={true}
            type="password"
            onChange={this.handleChange}
          />
          <RaisedButton
            id="authenticator__login-btn"
            label="Log in"
            primary={true}
            onClick={this.handleLogin}
          />
          <RaisedButton
            id="authenticator__signup-btn"
            label="Sign up"
            onClick={this.handleSignup}
          />
          <RaisedButton
            id="authenticator__logout-btn"
            label="Log out"
            secondary={true}
            onClick={this.handleSignout}
          />
          <br />
          <br />
          <RaisedButton
            id="authenticator__google-login-btn"
            label="Log in with Google"
            primary={true}
            onClick={this.handleGoogleLogin}
          />
        </CardText>
        <Snackbar
          open={this.state.notificationOpen}
          message={this.state.notificationMessage}
          autoHideDuration={4000}
          onRequestClose={this.handleNotificationClose}
        />
      </Card>
    )
  }
}

export default Home;