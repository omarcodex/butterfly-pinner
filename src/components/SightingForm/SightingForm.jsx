import React, { Component } from "react";
import TextField from "material-ui/TextField";
import FlatButton from 'material-ui/FlatButton';

import firebase from '../../javascripts/firebase';

import SightingFormSubmit from "./SightingFormSubmit";
import SightingFormSelect from "./SightingFormSelect";

import './SightingForm.css';

class SightingForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.writeSpecies = this.writeSpecies.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.state = {
      scientificName: "",
      count: "",
      sex: "",
      lat: "",
      lon: ""
    }
  }

  showPosition(position) {
    this.setState({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    });
  }

  getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      this.props.handleNotification("Geolocation is not supported by this browser.");
    }
  }

  writeSpecies() {
    let sp = this.state.scientificName;
    let snap;
    firebase.database().ref().child("species/" + sp).once("value").then(snap => {
      snap = snap.val()
      if (!snap) {
        let newSpecies = firebase.database().ref("species").child(sp);
        newSpecies.set({
          genus: sp.split(" ")[0],
          species: sp.split(" ")[1]
        });
      }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let newSighting = firebase.database().ref('sightings').push();
    this.writeSpecies();
    newSighting.set({
      'scientificName': this.state.scientificName,
      'count': this.state.count,
      'sex': this.state.sex,
      'lat': this.state.lat,
      'lon': this.state.lon
    });
    this.resetState();
    this.props.handleNotification("Record successfully added to the firebase.database.")
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
    return(
      <form className="sighting-form__form"onSubmit={this.handleSubmit}>
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
        <div className="row">
          <div className="one-half column">
            <TextField
              fullWidth={true}
              hintText="Latitude"
              value={this.state.lat}
            />
            <TextField
              fullWidth={true}
              hintText="Longitude"
              value={this.state.lon}
            />
          </div>
          <div
            className="one-half column"
          >
            <FlatButton
              label="Get GPS Coordinates"
              fullWidth={true}
              primary={true}
              onClick={this.getPosition}
              style={{border: "solid 1px #D32F2F"}}
            />
          </div>
        </div>
        <br />
        <SightingFormSubmit />
      </form>
    )
  }
}

export default SightingForm;