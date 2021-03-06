import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import SightingForm from './SightingForm';
import Snackbar from 'material-ui/Snackbar';

class SightingFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleNotification = this.handleNotification.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
    this.state = {
      notificationOpen: false,
      notificationMessage: ''
    };
  }

  handleNotification(message) {
    this.setState({
      notificationOpen: true,
      notificationMessage: message
    });
  }

  handleNotificationClose() {
    this.setState({
      notificationOpen: false
    });
  }

  render() {
    return (
      <div className="page">
        <Card>
          <CardTitle title="Log a New Sighting" />
          <CardText>
            <SightingForm handleNotification={this.handleNotification} />
          </CardText>
          <Snackbar
            open={this.state.notificationOpen}
            message={this.state.notificationMessage}
            autoHideDuration={4000}
            onRequestClose={this.handleNotificationClose}
          />
        </Card>
      </div>
    );
  }
}

export default SightingFormContainer;
