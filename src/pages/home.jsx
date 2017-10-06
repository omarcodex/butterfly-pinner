import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Navbar from '../components/Navbar/Navbar';
import PageWrapper from '../components/PageWrapper';
import SightingList from '../components/SightingList';
import { db } from '../javascripts/firebase';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      sightings: []
    };
  }

  componentDidMount() {
    let sightings;
    let ref = db.ref().child('sightings');
    var that = this;
    ref.once('value').then(function(snap) {
      sightings = Object.values(snap.val());
      that.setState({
        sightings: sightings
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <PageWrapper>
          <Card>
            <CardTitle title="Home" />
            <CardText>
              <SightingList sightings={this.state.sightings} />
            </CardText>
          </Card>
        </PageWrapper>
      </div>
    );
  }
}

export default Home;
