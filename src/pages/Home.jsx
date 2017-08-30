import React, { Component } from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import firebase from "../javascripts/firebase";

class Home extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.state={
      email: "",
      password: ""
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
    console.log(auth);
    const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.password);
    promise.catch( e => console.log(e.message) );
  }

  handleSignup(e) {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
    promise.catch( e => console.log(e.message) );
  }

  handleSignout(e) {
    firebase.auth().signOut();
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
        </CardText>
      </Card>
    )
  }
}

export default Home;