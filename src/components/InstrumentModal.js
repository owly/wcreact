import React, { useState } from "react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import MultiRangeSlider from "multi-range-slider-react";
import { Dropdown, Selection } from "react-dropdown-now";

import "react-dropdown-now/style.css";
const InstrumentModal = (props) => {
  const [minValue, set_minValue] = useState(11);
  const [maxValue, set_maxValue] = useState(22);
  const [volume, setVolume] = useState(0);
  const [noteDuration, setNoteDuration] = useState(4);
  const [instrumentName, setInstrumentName] = useState("");

  const handleInputWhiteKey = (e) => {
    console.log("RANGE");
    console.log(e);
    console.log(props.instrument);
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
    props.instrument.setWhiteKeyMin(e.minValue);
    props.instrument.setWhiteKeyMax(e.maxValue);
    // props.setinstrumentfrommodal(props.instrument);
  };

  const enter = () => {
    set_minValue(props.instrument.whiteKeysMin);
    set_maxValue(props.instrument.whiteKeysMax);
    setVolume(props.instrument.volume);
    setNoteDuration(props.instrument.noteDuration);
    setInstrumentName(props.instrument.instrumentName);
  };

  const setVolumeSlider = (event) => {
    console.log("volume set: " + event.target.value);
    setVolume(event.target.value);
    props.instrument.setVolume(event.target.value);
  };

  const setnoteDurationSlider = (event) => {
    console.log("note duration: " + event.target.value);
    setNoteDuration(event.target.value);
    props.instrument.setNoteDuration(event.target.value);
  };

  const setDropDownInstrumentName = (event) => {
    console.log("instr name: " + event.value);
    setInstrumentName(event.value);
    props.instrument.setInstrument(event.value);
    // props.instrument.setInstrumentName(event.target.value);
  };

  function playG(num) {
    return function () {
      console.log(num);
      props.instrument.playGeniePitch4(num);
    };
  }

  return (
    <Modal
      onEntering={() => enter()}
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Instrument
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Dropdown
              placeholder="Select an option"
              className="my-className"
              options={Object.keys(props.instruments)}
              value={instrumentName}
              onChange={(value) => {
                console.log("change!", value);
                setDropDownInstrumentName(value);

                // props.setInstrumentFromModal(props.instrument);
              }}
              onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
              onClose={(closedBySelection) =>
                console.log("closedBySelection?:", closedBySelection)
              }
              onOpen={() => console.log("open!")}
            />
          </Row>
          <Row>
            Volume: {volume}
            <input
              value={volume}
              type="range"
              onChange={setVolumeSlider}
              min="-22"
              max="11"
              step="0.5"
            ></input>
          </Row>
          <Row>
            Note duration: {noteDuration}
            Volume: {volume}
            <input
              value={noteDuration}
              type="range"
              onChange={setnoteDurationSlider}
              min="0"
              max="22"
              step="0.5"
            ></input>
          </Row>
          <Row>
            <MultiRangeSlider
              min={0}
              max={100}
              step={5}
              ruler={false}
              label={true}
              preventWheel={false}
              minValue={minValue}
              maxValue={maxValue}
              onInput={(e) => {
                handleInputWhiteKey(e);
              }}
            />
            whitekeys {minValue} {maxValue}
          </Row>
          <Row>
            <Col xs={2} md={1}>
              <Button onClick={playG(0)}>0</Button>
            </Col>
            <Col xs={2} md={1}>
              <Button onClick={playG(1)}>1</Button>
            </Col>
            <Col xs={2} md={1}>
              <Button onClick={playG(2)}>2</Button>
            </Col>
            <Col xs={2} md={1}>
              <Button onClick={playG(3)}>3</Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onSave}>Save</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

// const [modalShow, setModalShow] = useState(false);
export default InstrumentModal;
