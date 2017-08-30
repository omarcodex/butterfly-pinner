import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from "./components/Navigation";
import SightingFormWrapper from "./components/SightingFormWrapper";
import GuideWrapper from "./components/GuideWrapper";
import Home from "./pages/Home";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    };
  }
  
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <Navigation />
            <div className="wrapper">
              <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/guide" component={Guide} />
                <Route path="/sighting" component={Sighting} />
              </div>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const Sighting = () => {
  return(
    <SightingFormWrapper className="sighting-form"/>
  )
}

const Guide = () => {
  return(
    <GuideWrapper />
  )
}

export default App;
