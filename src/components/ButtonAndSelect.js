import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DropDownInstruments from "./DropDownInstruments";

const ButtonAndSelect = (props) => {
  return (
    <div>
      <Button
        onClick={() => props.onSelectInstrument(1, "p")}
        id="{props.id}"
        size="lg"
        variant="primary"
      >
        {props.instrument}
      </Button>
      <DropDownInstruments props={props} />
    </div>
  );
};

export default ButtonAndSelect;
