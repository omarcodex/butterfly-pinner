import React from 'react';
// import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
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
        <ul>
          <li>{s.scientificName}</li>
          <li>
            Count:
            {s.count}
          </li>
          <li>
            Sex:
            {s.sex}
          </li>
          <li>
            Lat:
            {s.lat}
          </li>
          <li>
            Long:
            {s.lon}
          </li>
          <li>
            <img src={s.photoURL} alt={s.scientificName} width="300px" />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default SightingList;
