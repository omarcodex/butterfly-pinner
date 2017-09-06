import React, { Component } from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";

import GuideEntries from "./GuideEntries";
import "./Guide.css";

class GuideContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      entries: [
        {
          id: 1,
          scientificName: "Papilio eurymedon",
          familyName: "Papilionidae",
          description: "The Pale Swallowtail is a pale swallowtail.",
          photoUrl: "/images/pale-swallowtail.jpg"
        },
        {
          id: 2,
          scientificName: "Danaus plexippus",
          familyName: "Nymphalidae",
          description: "The Monarch is a member of the Milkweed family famed for its multi-generational migrations.",
          photoUrl: "./images/monarch.jpg"
        },
        {
          id: 3,
          scientificName: "Nymphalis antiopa",
          familyName: "Nymphalidae",
          description: "The Mourning Cloak is a large brown butterfly with yellow fringes on its wings.",
          photoUrl: "/images/mourning-cloak.jpg"
        }
      ]
    }
  }

  render(){
    return(
      <div className="page">
        <Card className="guide__container">
          <CardTitle title="Butterfly Guide"/>
          <CardText>
            <GuideEntries
              entries={this.state.entries}
            />
          </CardText>
        </Card>
      </div>
    )
  }
}

export default GuideContainer;