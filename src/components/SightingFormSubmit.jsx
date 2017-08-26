import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";

class SightingFormSubmit extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    return(
      <RaisedButton
        label="Submit"
        primary={true}
        type="submit"
      />
    )
  }
}

export default SightingFormSubmit;