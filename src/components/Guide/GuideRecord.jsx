import React from "react";
import { Card, CardMedia, CardTitle, CardText } from "material-ui/Card";

const GuideRecord = (props) => {
  console.log(props)
  return(
    <Card>
      <CardMedia overlay={<CardTitle title={props.scientificName} subtitle={props.familyName} />}>
        <img src={props.photoUrl} alt={props.scientificName} />
      </CardMedia>
      <CardText>
        {props.description}
      </CardText>
    </Card>
  )
}

export default GuideRecord;