import React, { Component } from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Snackbar from "material-ui/Snackbar";
import firebase from "../../javascripts/firebase";
import "./LoginForm.css"
import { loginUser } from "../../actions/userActions";
import store from "../../store/configureStore";

class LoginFormContainer extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    this.handleNotification = this.handleNotification.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
    this.state = {
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
    promise.then( response => {
      console.log(response);
      this.handleNotification("Succesfully signed in!");
    });
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
      let args = {
        user: result.user,
        token: result.credential.accessToken
      }
      store.dispatch(loginUser(args));
    }).catch(function(error) {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // var email = error.email;
      // var credential = error.credential;
    });
    
  }

  render(){
    return(
      <div className="page">
        <Card className="login-form__container">
          <CardTitle title="Login" style={{paddingBottom: 0}}/>
          <CardText>
            <TextField
              className="login-form__email-field"
              data-target-field="email"
              hintText="Email"
              fullWidth={true}
              onChange={this.handleChange}
            />
            <TextField
              className="login-form__password-field"
              data-target-field="password"
              hintText="Password"
              fullWidth={true}
              type="password"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <RaisedButton
              className="login-form__button"
              label="Log in"
              primary={true}
              onClick={this.handleLogin}
            />
            <RaisedButton
              className="login-form__button"
              label="Sign up"
              onClick={this.handleSignup}
            />
            <br />
            <hr />
            <RaisedButton
              className="login-form__google-login-btn"
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
      </div>
    )
  }
}

export default LoginFormContainer;