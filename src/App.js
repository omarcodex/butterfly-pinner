import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Navbar from "./components/Navbar";
import './App.css';

const muiTheme = getMuiTheme({
  "palette": {
      "primary1Color": "#b39ddb",
      "primary2Color": "#d1c4e9",
      "accent1Color": "#ffd740",
      "accent2Color": "#9575cd",
      "accent3Color": "#ffd740",
      "primary3Color": "#e1bee7",
      "pickerHeaderColor": "#b39ddb"
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div className="App">
          <Navbar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
