import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from "./Navigation";
import SightingFormContainer from "./SightingForm/SightingFormContainer";
import GuideContainer from "./Guide/GuideContainer";
import UserProfileContainer from "./UserProfile/UserProfileContainer";
import LoginFormContainer from "./LoginForm/LoginFormContainer";

import "./App.css";

const muiTheme = getMuiTheme({
  palette: {
    "primary1Color": "#d32f2f",
    "accent1Color": "#ffab40"
  },
  fontFamily: 'Raleway',
  appBar: {
  },
});


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    };
  }
  
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <div className="App">
            <Navigation />
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/guide" component={Guide} />
              <Route path="/sighting" component={Sighting} />
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const Home = () => {
  return(
    <div className="page">
      <Card style={{padding: "20px"}}>
        <CardTitle title="Home" />
        <CardText>
        </CardText>
      </Card>
    </div>
  )
}

const Login = () => {
  return(
    <LoginFormContainer />
  )
}

const Profile = () => {
  return(
    <UserProfileContainer />
  )
}

const Sighting = () => {
  return(
    <SightingFormContainer className="sighting-form"/>
  )
}

const Guide = () => {
  return(
    <GuideContainer />
  )
}

export default App;
