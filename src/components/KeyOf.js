import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";

const KeyOf = (props) => {
  var letterNotes = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#"
  ];
  var scales = ["none", "major", "minor"];

  return (
    <div>
      Key and Scale:
      <Dropdown
        placeholder="Select an option"
        className="my-className"
        options={letterNotes}
        value={props.keyOf}
        onChange={(value) => {
          console.log("change!", value);
          props.setKeyOf(value.value);
        }}
        onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
        onClose={(closedBySelection) =>
          console.log("closedBySelection?:", closedBySelection)
        }
        onOpen={() => console.log("open!")}
      />
      <Dropdown
        placeholder="Select a scale"
        className="scales"
        options={scales}
        value={props.scale}
        onChange={(value) => {
          console.log("change!", value);
          props.setScale(value.value);
        }}
        onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
        onClose={(closedBySelection) =>
          console.log("closedBySelection?:", closedBySelection)
        }
        onOpen={() => console.log("open!")}
      />
    </div>
  );
};

// const [modalShow, setModalShow] = useState(false);
export default KeyOf;
