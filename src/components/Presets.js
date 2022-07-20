import React, { Component } from "react";
import { Dropdown } from "react-dropdown-now";

const Presets = (props) => {
  // class Presets extends Component{

  return (
    <Dropdown
      placeholder="select Preset"
      options={props.presetArray}
      value={props.preset}
      onChange={(value) => {
        console.log("change!", value);
        props.setPreset(value.value);
      }}
    />
  );
};

export default Presets;
