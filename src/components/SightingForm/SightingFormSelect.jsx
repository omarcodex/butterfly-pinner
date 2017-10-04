import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SightingFormSelect = props => {
  return (
    <SelectField
      hintText="Sex"
      fullWidth={true}
      value={props.value}
      onChange={props.handleChange}
    >
      <MenuItem value="unknown" primaryText="Unknown" />
      <MenuItem value="male" primaryText="♂ Male" />
      <MenuItem value="female" primaryText="♀ Female" />
    </SelectField>
  );
};

export default SightingFormSelect;
