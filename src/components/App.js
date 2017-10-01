import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import SightingFormContainer from './SightingForm/SightingFormContainer';
import GuideContainer from './Guide/GuideContainer';
import UserProfileContainer from './UserProfile/UserProfileContainer';
import LoginFormContainer from './LoginForm/LoginFormContainer';
import Login from '../pages/Login';

import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#457CDB',
    accent1Color: '#A7EB81'
  },
  fontFamily: 'PT Sans',
  appBar: {}
});

class App extends Component {
  constructor(props) {
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
            <Route exact path="/" component={Login} />
            <div className="container">
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

const Profile = () => {
  <div>
    <Navigation />
    <UserProfileContainer />
  </div>;
};

const Sighting = () => {
  <div>
    <Navigation />
    <SightingFormContainer className="sighting-form" />
  </div>;
};

const Guide = () => {
  <div>
    <Navigation />
    <GuideContainer />
  </div>;
};

export default App;
