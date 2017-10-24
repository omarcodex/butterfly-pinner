import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import firebase, { auth } from '../../javascripts/firebase';
import storage from '../../javascripts/firebase-storage';
// import UserProfile from './UserProfile'; // New.

import SightingFormSubmit from './SightingFormSubmit';
import SightingFormSelect from './SightingFormSelect';
import IconPhoto from '../IconPhoto';

import store from '../../store/configureStore';

class SightingForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.writeSpecies = this.writeSpecies.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.state = {
      scientificName: '',
      count: '',
      sex: '',
      lat: '',
      lon: '',
      photoURL: null,
      currentTime: null
    };
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
      this.props.handleNotification('Geolocation is not supported by this browser.');
    }
  }

  writeSpecies() {
    let sp = this.state.scientificName;

    let genus = sp.split(/ |\./)[0];
    let species = sp.split(/ |\./)[1] || 'NA';
    let snap;
    firebase
      .database()
      .ref()
      .child('species/' + genus)
      .once('value')
      .then(snap => {
        snap = snap.val();
        if (!snap) {
          let newSpecies = firebase
            .database()
            .ref('species')
            .child(genus);
          newSpecies.set({
            rawData: sp,
            genus: genus,
            species: species
          });
        }
      });
  }

  uploadFile(e) {
    // console.log('Photo uploading...', e.target.files); // Debugging.
    this.photoURL = e.target.files[0];
  }

  handleSubmit(e) {
    e.preventDefault();
    let newSightingRef = firebase
      .database()
      .ref('sightings')
      .child(auth.currentUser.uid);
    let newSightingKey = firebase
      .database()
      .ref('sightings')
      .child(auth.currentUser.uid)
      .push().key;
    let file = this.photoURL || null;
    if (file && !file.type.match('image.*')) {
      window.alert('You can only share images. Please try again.');
      return;
    }
    // To-do: save species to dictionary if it hasn't been logged already:
    let currentTime = new Date();
    this.state.currentTime = currentTime.toString();
    this.writeSpecies();
    newSightingRef
      .child(newSightingKey)
      .set({
        scientificName: this.state.scientificName,
        count: this.state.count,
        sex: this.state.sex,
        lat: this.state.lat,
        lon: this.state.lon,
        photoURL: this.photoURL || 'NA',
        createdAt: this.state.currentTime
      })
      .then(
        function(data) {
          // Upload image to Cloud Storage:
          var filePath = 'sightingImages/' + newSightingKey;
          return storage
            .ref(filePath)
            .put(file)
            .then(
              function(snapshot) {
                // Get the file's Storage URI and update the reference:
                var fullPath = snapshot.metadata.fullPath;
                console.log('current data.', data);
                console.log('current snapshot', snapshot);
                return storage
                  .ref(fullPath)
                  .getDownloadURL()
                  .then(function(url) {
                    newSightingRef.child(newSightingKey).update({ photoURL: url });
                  });
              }.bind(this)
            );
        }.bind(this)
      )
      .catch(function(error) {
        console.error('There was an error uploading a file to Cloud Storage:', error);
      });
    this.resetState();
    this.props.handleNotification('Record successfully added to the database.');
    // let path = newSighting.toString();
  }

  resetState() {
    this.setState({
      scientificName: '',
      count: '',
      sex: '',
      lat: '',
      lon: '',
      photoURL: null
    });
  }

  handleChange(event, index, value) {
    let attr = event.target.getAttribute('data-target-field');
    let val = event.target.value;
    if (!attr) {
      attr = 'sex';
      val = value;
    }
    this.setState({
      [attr]: val
    });
  }

  render() {
    return (
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
        <SightingFormSelect handleChange={this.handleChange} value={this.state.sex} />
        <TextField hintText="Latitude" value={this.state.lat} />
        <TextField hintText="Longitude" value={this.state.lon} />
        <FlatButton label="Get GPS Coordinates" primary={true} onClick={this.getPosition} />
        <br />
        <br />
        <div>
          <input
            id="myInput"
            type="file"
            accept="image/*"
            capture="camera"
            ref={ref => (this.myInput = ref)}
            style={{ display: 'none' }}
            onChange={this.uploadFile}
          />
          <FloatingActionButton
            className="floatingButton"
            children={<IconPhoto />}
            secondary={true}
            onClick={e => this.myInput.click()}
          />
        </div>
        <SightingFormSubmit />
      </form>
    );
  }
}

export default SightingForm;
