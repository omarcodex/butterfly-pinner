import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import SightingFormWrapper from "./components/SightingFormWrapper";
import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Guide} />
            <Route path="/sighting" component={Sighting} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

class Sighting extends Component {
  render() {
  return(
    <div>
     <SightingFormWrapper className="sighting-form"/>
    </div>
    )
  }
}

const Guide = () => {
  <div>
    <h1>Guide!</h1>
  </div>
}

export default App;
