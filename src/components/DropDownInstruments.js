import React, { useState } from "react";
import { Dropdown, Selection } from "react-dropdown-now";

const DropDownInstruments = (props) => {
  const [state, setState] = React.useState({
    selectedOption: "piano"
  });

  let onChange = function (event, value) {
    console.log(event);
    setState(event.target.value);
    console.log(`Option selected:`, state.selectedOption);
  };

  let handleChange = (event, value) => {
    const _state = { ...state };
    console.log(value);
    let selectedOption = value.selectedOption;
    setState({ ..._state, selectedOption });
    console.log(`Option selected:`, _state.selectedOption);
  };

  let instList = [];
  // props.instArray.length > 0 &&
  // props.instArray.map((item, i) => {
  //   return (
  //     <option key={i} value={item.value}>
  //       {item.label}
  //     </option>
  //   );
  // }, this);

  return (
    <div>
      <select onChange={onChange}>{instList}</select>
    </div>
  );

  // return <Select value="ff" x onChange={handleChange} options={instArray} />;
};

export default DropDownInstruments;
