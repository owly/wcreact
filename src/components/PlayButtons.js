import React, { useState } from "react";
import {
  ButtonGroup,
  Button,
  Modal,
  Container,
  Row,
  Col
} from "react-bootstrap";

const PlayButtons = (props) => {
  const enter = () => {};

  function playG(num) {
    return function () {
      console.log(num);
      console.log(props.instruments);
      props.instruments[num].playGenie();
    };
  }

  return (
    <Modal
      onEntering={() => enter()}
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <ButtonGroup className="d-flex">
                <Button
                  // block
                  style={{ padding: "10% 0" }}
                  // className="btn-block p3 mr-3 mt-3 btn-lg"
                  onClick={playG(0)}
                >
                  {props.instruments[0].instrumentName}
                </Button>
                <Button className="p3 btn-block" onClick={playG(1)}>
                  {props.instruments[1].instrumentName}
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row style={{ padding: "10% 0" }}>
            <Col xs={12} md={6}>
              <ButtonGroup className="d-flex">
                <Button style={{ padding: "10% 0" }} onClick={playG(2)}>
                  {props.instruments[2].instrumentName}
                </Button>
                <Button style={{ padding: "10% 0" }} onClick={playG(3)}>
                  {props.instruments[3].instrumentName}
                </Button>
              </ButtonGroup>
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
export default PlayButtons;
