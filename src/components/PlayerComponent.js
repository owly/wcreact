import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";

const PlayerComponent = (props) => {
  // const player = new Player({
  //   url: Sound,
  //   loop: true,
  //   autostart: false,
  //   onload: () => {
  //     alert("-0");
  //   }
  // }).toDestination();

  return (
    <div>
      Sound
      <Dropdown
        placeholder="Play"
        options={props.mp3s}
        value={props.mp3}
        onChange={(value) => {
          console.log("change!", value);
          props.setmp3(value.value);
        }}
        onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
        onClose={(closedBySelection) =>
          console.log("closedBySelection?:", closedBySelection)
        }
        onOpen={() => console.log("open!")}
      />
      <Button onClick={props.play}>Play</Button>
      <Button onClick={props.stop}>Stop</Button>
      <Button onClick={props.pause}>Pause</Button>
      {/* <Button onClick={props.pause}>Pause to Play</Button> */}
    </div>
  );
};

export default PlayerComponent;
