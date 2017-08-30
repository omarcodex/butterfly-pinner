import React, { Component } from "react";
import { Card, CardMedia, CardTitle, CardText } from "material-ui/Card";

class GuideEntries extends Component {

  constructor(props) {
    super(props);
    this.renderEntry = this.renderEntry.bind(this);
  }
  
  renderEntry({scientificName, familyName, photoUrl, description}) {
    return(
      <Card>
        <CardMedia overlay={<CardTitle title={scientificName} subtitle={familyName} />}>
          <img src={photoUrl} alt={scientificName} />
        </CardMedia>
        <CardText>
          {description}
        </CardText>
      </Card>
    )
  }
  
  render(){
    return(
      <div>
        { this.props.entries.map( entry => this.renderEntry(entry) ) }
      </div>
    )
  };
}

export default GuideEntries;
