import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle, CardText } from "material-ui/Card";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navigation from "./components/Navigation";
import SightingFormWrapper from "./components/SightingFormWrapper";
import GuideWrapper from "./components/GuideWrapper";
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
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route path="/guide" component={Guide} />
            <Route path="/sighting" component={Sighting} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const Home = () => {
  return(
    <Card>
      <CardTitle>Welcome!</CardTitle>
    </Card>
  )
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
