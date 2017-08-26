import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from "./components/Navbar";
import SightingForm from "./components/SightingForm";
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navbar />
          <div>
            <SightingForm className="sighting-form"/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
