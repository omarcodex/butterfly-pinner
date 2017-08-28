import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

import '../SightingForm.css';

const SightingFormSelect = (props) => {
  return(
    <SelectField
      hintText="Sex"
      fullWidth={true}
      value={props.value}
      onChange={props.handleChange}
    >
      <MenuItem value="unknown" primaryText="Unknown" data-target-field="sex"/>
      <MenuItem value="male" primaryText="Male" data-target-field="sex"/>
      <MenuItem value="female" primaryText="Female" data-target-field="sex"/>
    </SelectField>
  )
}

export default SightingFormSelect;