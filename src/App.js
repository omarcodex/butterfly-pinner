import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import Login from './pages/login';
import Profile from './pages/profile';
import Guide from './pages/guide';
import Sighting from './pages/sighting';
import Home from './pages/home';
import { auth } from './javascripts/firebase';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#457CDB',
    accent1Color: '#A7EB81'
  },
  fontFamily: 'PT Sans',
  appBar: {}
});

const PrivateRoute = ({ component: Component, ...rest }) => {
  const cU = auth.currentUser;
  return (
    <Route
      {...rest}
      render={props =>
        cU ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )}
    />
  );
};

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
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/guide" component={Guide} />
            <PrivateRoute path="/sighting" component={Sighting} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
