import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Card, CardText, CardTitle } from "material-ui/Card";

import SightingForm from "./SightingForm"

import '../SightingForm.css';

class SightingFormWrapper extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Card className="sighting-form__card">
        <CardTitle
        title="Register a new sighting"
        />
        <CardText>
          <SightingForm />
        </CardText>
      </Card>
    )
  }
}

export default SightingFormWrapper;