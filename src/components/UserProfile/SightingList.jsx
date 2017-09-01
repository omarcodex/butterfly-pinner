import React, { Component } from "react";

const SightingList = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Sighting List</h1>
      {props.sightings.map(s=>
        <ul>
          <li>
            {s.scientificName}
          </li>
          <li>
            {s.count}
          </li>
          <li>
            {s.sex}
          </li>
        </ul>
        )}
    </div>
  )
}

export default SightingList;