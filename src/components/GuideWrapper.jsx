import React, { Component } from "react";
import { Card, CardText, CardTitle } from "material-ui/Card";

class GuideWrapper extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    return(
      <Card className="guide__card">
        <CardTitle
        title="Butterfly Guide"
        />
        <CardText>
        </CardText>
      </Card>
    )
  }
}

export default GuideWrapper;