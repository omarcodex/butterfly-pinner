import React, { Component } from "react";
import { Card, CardText, CardTitle } from "material-ui/Card";

import GuideRecord from "./GuideRecord";

class GuideWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
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
          description: "The Mourning Cloak is a large brown butterfly with yellow-fringes on its wings.",
          photoUrl: "/images/mourning-cloak.jpg"
        }
      ]
    }
  }

  render(){
    let records = this.state.data.map((record)=>{
      return(
        <GuideRecord
          scientificName={record.scientificName}
          familyName={record.familyName}
          description={record.description}
          photoUrl={record.photoUrl}
          key={record.id}
        />
      )});
    return(
      <div>
        <h1>Butterfly Guide</h1>
        {records}
      </div>
    )
  }
}

export default GuideWrapper;