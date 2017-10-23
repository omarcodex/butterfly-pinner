import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
// import styled from 'styled-components';
// const Img = styled.img`
//   margin:
// `

const SightingList = props => {
  console.log(props);
  return (
    <div>
      <h1>Sighting List</h1>
      {props.sightings.map(s => (
        <Card>
          <CardTitle title={s.scientificName} subtitle={'Lat: ' + s.lat + ', Long: ' + s.lon} />
          <CardMedia>
            <img
              src={s.photoURL || 'https://evolution.berkeley.edu/evolibrary/images/evo/ontogenew.gif'}
              alt={s.scientificName}
            />
          </CardMedia>
          <CardText>
            <h3>Count: {s.count}</h3>
            <h3>Sex: {s.sex}</h3>
            <h3>Location: {s.lat + ', ' + s.lon}</h3>
          </CardText>
        </Card>
      ))}
    </div>
  );
};

export default SightingList;
