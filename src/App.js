import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/login';
import Profile from './pages/profile';
import Guide from './pages/guide';
import Sighting from './pages/sighting';
import { fb } from './javascripts/firebase';

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

export default App;
