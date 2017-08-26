import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from "./components/Navbar";
import SightingFormWrapper from "./components/SightingFormWrapper";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navbar />
          <div>
            <SightingFormWrapper className="sighting-form"/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
