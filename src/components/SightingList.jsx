import React from 'react';

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
        </ul>
      ))}
    </div>
  );
};

export default SightingList;
