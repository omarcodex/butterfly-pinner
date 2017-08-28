import React, { Component } from "react";
import TextField from "material-ui/TextField";
import firebase from '../firebase';

import SightingFormSubmit from "./SightingFormSubmit"
import SightingFormSelect from "./SightingFormSelect"

import '../SightingForm.css';

class SightingForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sightings = firebase.database().ref('sightings');
    this.state = {
      scientificName: "",
      count: "",
      sex: ""
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let newSighting = this.sightings.push();
    newSighting.set({
      'scientificName': this.state.scientificName,
      'count': this.state.count,
      'sex': this.state.sex
    });
    this.resetState();
    this.props.handleNotification("Record successfully added to the database.")
    // let path = newSighting.toString();
  }

  resetState() {
    this.setState({
      scientificName: "",
      count: "",
      sex: ""
    })
  }

  handleChange(event, index, value) {
    let attr = event.target.getAttribute("data-target-field");
    let val = event.target.value;
    if (!attr) {
      attr = "sex"
      val = value
    }
    this.setState({
      [attr]: val
    });
  }
  
  render(){
    console.log(this.state)
    return(
      <form onSubmit={this.handleSubmit}>
        <TextField
          hintText="Scientific Name"
          fullWidth={true}
          value={this.state.scientificName}
          onChange={this.handleChange}
          data-target-field="scientificName"
        />
        <TextField
          hintText="Count"
          fullWidth={true}
          value={this.state.count}
          onChange={this.handleChange}
          data-target-field="count"
        />
        <SightingFormSelect
          handleChange={this.handleChange}
          value={this.state.sex}
        />
        <SightingFormSubmit />
      </form>
    )
  }
}

export default SightingForm;