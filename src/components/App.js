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
import PageWrapper from '../components/PageWrapper';

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
            <Route path="/profile" component={Profile} />
            <Route path="/guide" component={Guide} />
            <Route path="/sighting" component={Sighting} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const Profile = () => (
  <div>
    <Navigation />
    <PageWrapper>
      <UserProfileContainer />
    </PageWrapper>
  </div>
);

const Sighting = () => (
  <div>
    <Navigation />
    <PageWrapper>
      <SightingFormContainer className="sighting-form" />
    </PageWrapper>
  </div>
);

const Guide = () => (
  <div>
    <Navigation />
    <PageWrapper>
      <GuideContainer />
    </PageWrapper>
  </div>
);

export default App;
