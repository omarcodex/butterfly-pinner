import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

import SightingFormSubmit from "./SightingFormSubmit"

import '../SightingForm.css';

class SightingFormSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, index, value) => this.setState({value})

  render(){
    return(
      <SelectField
        hintText="Sex"
        fullWidth={true}
        value={this.state.value}
        onChange={this.handleChange}
      >
        <MenuItem value="unknown" primaryText="Unknown"/>
        <MenuItem value="male" primaryText="Male"/>
        <MenuItem value="female" primaryText="Female"/>
      </SelectField>
    )
  }
}

export default SightingFormSelect;