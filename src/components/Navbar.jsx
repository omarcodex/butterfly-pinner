import React, { Component } from "react";
import AppBar from "material-ui/AppBar";

class Navbar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <AppBar
        title="Butterfly Pinner"
      />
    )
  }
}

export default Navbar;