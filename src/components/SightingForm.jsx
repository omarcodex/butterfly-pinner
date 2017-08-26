import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Card, CardText, CardTitle } from "material-ui/Card";

import SightingFormSubmit from "./SightingFormSubmit"
import SightingFormSelect from "./SightingFormSelect"

import '../SightingForm.css';

class SightingForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }



  render(){
    return(
      <Card className="sighting-form__card">
        <CardTitle
        title="Register a new sighting"
        />
        <CardText>
          <form onSubmit={this.handleSubmit}>
            <TextField
              hintText="Scientific Name"
              fullWidth={true}
            />
            <TextField
              hintText="Count"
              fullWidth={true}              
              />
            <SightingFormSelect />
            <SightingFormSubmit />
          </form>
        </CardText>
      </Card>
    )
  }
}

export default SightingForm;