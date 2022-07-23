import "./styles.css";
// import LogArea from "./components/LogArea";
// import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
// import Select from "react-select";
import React, { useRef, useState, useEffect } from "react";
import InstrumentModal from "./components/InstrumentModal";
import { Button, Container, Row, Col } from "react-bootstrap";
import Instrument from "./components/Instrument";
import KeyOf from "./components/KeyOf";
import PlayerComponent from "./components/PlayerComponent";
import { Transport, Player } from "tone";
import Sound from "./mp3s/lead.mp3";
import PlayButtons from "./components/PlayButtons";
import Presets from "./components/Presets";
import allPresets from "./components/allPresets";

const player = new Player({
  url: Sound,
  loop: true,
  autostart: false,
  onload: () => {
    App.enable();
    // alert("-0");
  }
}).toDestination();

export default function App() {
  const [currentInstrumentNum, setCurrentInstrumentNum] = useState(0);
  const [keyOf, setKeyOf] = useState("C");
  const [scale, setScale] = useState("major");
  const [presetName, setPresetName] = useState();
  const [lastPlayed, setLastPlayed] = useState(['','','','']);

  const playerRef = useRef(player);
  // var instArray = toneInstruments;
  // [
  //   { value: "piano", label: "piano" },
  //   { value: "bass-electric", label: "bass-electric" }
  // ];

  const enable = () => {
    console.log("ENABLE");
  };

  var instrument0 = new Instrument(
    Object.keys(toneInstruments)[0],
    0,
    5,
    11,
    88
  );
  var instrument1 = new Instrument(
    Object.keys(toneInstruments)[1],
    0,
    5,
    24,
    75
  );
  var instrument2 = new Instrument(
    Object.keys(toneInstruments)[2],
    0,
    5,
    20,
    80
  );
  var instrument3 = new Instrument(
    Object.keys(toneInstruments)[3],
    0,
    5,
    15,
    85
  );
  const instruments = [instrument1, instrument2, instrument3, instrument0];
  const [allInstruments, setInstruments] = React.useState(instruments);

  const [logValue, setLogValue] = React.useState("first");

  const [show, setShow] = useState(false);
  const [showPlayButtons, setShowPlayButtons] = useState(false);

  const handleClose = () => setShow(false);
  const handleClosePlayButtons = () => setShowPlayButtons(false);

  const edit = (instrumentNum) => {
    setCurrentInstrumentNum(instrumentNum);
    setShow(true);
  };

  const openPlayButtons = () => {
    setShowPlayButtons(true);
  };

  function setKeyAll(key) {
    setKeyOf(key);
    console.log("setkeyall: " + key);
    allInstruments.forEach((instrument) => {
      instrument.setKey(key);
    });
  }

  function setScaleAll(scale) {
    setScale(scale);
    allInstruments.forEach((instrument) => {
      instrument.setScale(scale);
    });
  }

  function setPreset(presetName) {
    console.log(presetName);
  }

  function play(num) {
    console.log(allPresets);
    console.log(Presets);
    // return function () {
    // setLogValue("play " + num + "\n" + logValue);
    console.log("play " + num + "\n" + logValue);
    var note = allInstruments[num].playGenie();
    var lastPlayedCopy = [...lastPlayed];
    lastPlayedCopy[num] = note;
    console.log(lastPlayedCopy);
    setLastPlayed(lastPlayedCopy);
    // };
  }

  function _handleKeyDown(key) {
    console.log(key);
    if (key.keyCode === 16) {
      // allInstruments[0].playGeniePitch4(2);
      play(0);
    }
    if (key.keyCode === 17) {
      play(1);
    }
    if (key.keyCode === 90) {
      play(0);
    }
    if (key.keyCode === 88) {
      play(1);
    }
    if (key.keyCode === 51) {
      console.log("fsdafasdf");
      play(2);
    }
    if (key.keyCode === 52) {
      play(3);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", _handleKeyDown);
  });

  const [mp3, set_mp3] = useState("https://0xdy3z.csb.app/mp3s/lead.mp3");
  const mp3s = [
    { label: "bclinton", value: "bclinton.mp3" },
    { label: "greeneggs", value: "greeneggs.mp3" },
    { label: "lead", value: "lead.mp3" },
    { label: "rumi", value: "rumi.mp3" }
  ];
  //   "aw.mp3",
  //   "chilloutdubinE.mp3",
  //   "dh.mp3",
  //   "greeneggs.mp3",
  //   "rumi.mp3",
  //   "floyd.mp3",
  //   "nwg.mp3",
  //   "lead.mp3",
  //   "bcremix.mp3"
  // ];

  const playMp3 = () => {
    playerRef.current.sync().start(0);
    Transport.start();
  };

  // function playMp3() {
  //   console.log(playerRef.current);
  //   playerRef.current.play();
  //   // Transport.start();
  // }
  const pause = () => {
    Transport.pause();
    // playerRef.current.stop();
    // playerRef.current.pause();
    // Transport.pause();
  };

  const playerLoaded = () => {
    alert("loaded");
    console.log("PLAYER LOADED");
    // player.sync(0).start();
    // Transport.start();
  };

  function setmp3(mp3File) {
    playerRef.current.stop();
    console.log("setmp3: " + mp3File);
    const file = "https://0xdy3z.csb.app/mp3s/" + mp3File;

    playerRef.current.stop();
    playerRef.current = new Player({
      url: file,
      loop: true,
      autostart: false,
      onload: () => {
        enable();
        // alert("-0");
      }
    }).toDestination();

    // playerRef.current.load(file);
    // playerRef.current.toDestination();
    // const p = new Player({
    //   url: file,
    //   loop: true,
    //   autostart: false,
    //   onload: () => {
    //     playerLoaded();
    //   }
    // }).toDestination();
    // playerRef.current = p;
    // set_mp3(mp3File);
    // setPlayer(p);
  }
  function logPreset() {}
  function stop() {
    console.log("STOP");
    Transport.stop();
    // playerRef.current.stop();
  }
  return (
    <div className="App">
      <style type="text/css">
        {`
          .btn-p {
            background-color: purple;
            color: white;
          }
          .btn-y {
            background-color: yellow;
            color: white;
          }

          .btn-b {
            background-color: black;
            color: white;
          }
          .btn-r {
            background-color: red;
            color: white;
          }
          .btn-xxl {
            padding: 5rem 5rem;
            font-size: 5rem;
          }
        `}
      </style>

      <Container fluid>
        <Row style={{ paddingBottom: "11px" }}>
          <Presets
            setPreset={setPreset}
            presetArray={Object.keys(allPresets)}
          />
          {/* <Presets presetArray={[("fdsf": "fsd")]} /> */}
          {/* <Col xs={4} md={4} lg={2}> */}
          <PlayerComponent
            mp3={mp3}
            setmp3={setmp3}
            mp3s={mp3s}
            play={playMp3}
            stop={stop}
            pause={pause}
          />
          {/* </Col> */}
        </Row>

        <Row>
          <Col xs={6} md={4} lg={3}>
            <Button
              variant="p"
              size="xxl"
              style={{ padding: "5rem 5rem", fontSize: "1.5rem" }}
              onClick={() => play(0)}
            >
              {allInstruments[0].instrumentName}
            </Button>
            {lastPlayed[0]}
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Button
              variant="y"
              style={{ padding: "5rem 5rem", fontSize: "1.5rem" }}
              onClick={() => play(1)}
            >
              {allInstruments[1].instrumentName}
            </Button>
            {lastPlayed[1]}
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Button
              variant="r"
              style={{ padding: "5rem 5rem", fontSize: "1.5rem" }}
              onClick={() => play(2)}
            >
              {allInstruments[2].instrumentName}
            </Button>
            {lastPlayed[2]}
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Button
              variant="b"
              style={{ padding: "5rem 5rem", fontSize: "1.5rem" }}
              onClick={() => play(3)}
            >
              {allInstruments[3].instrumentName}
            </Button>
            {lastPlayed[3]}
          </Col>
        </Row>

        <Row style={{ paddingBottom: "11px" }}>
          {/* <Col xs={2} md={2} lg={2}> */}
          <KeyOf
            keyOf={keyOf}
            scale={scale}
            setKeyOf={setKeyAll}
            setScale={setScaleAll}
          />
          {/* </Col> */}
        </Row>

        <Row style={{ paddingBottom: "11px" }}>
          <Col xs={6} md={4} lg={3}>
            <Button variant="p" onClick={() => edit(0)}>
              Edit
            </Button>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Button variant="y" onClick={() => edit(1)}>
              Edit
            </Button>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Button variant="r" onClick={() => edit(2)}>
              Edit
            </Button>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Button variant="b" onClick={() => edit(3)}>
              Edit
            </Button>
          </Col>
        </Row>

        <Row style={{ paddingBottom: "11px" }}>
          {/* <LogArea logValue={logValue} /> */}
          <Button onClick={() => openPlayButtons()}>PLAY</Button>
        </Row>

        <Row>
          {/* <LogArea logValue={logValue} /> */}
          <Button onClick={() => logPreset()}>log Preset</Button>
        </Row>
      </Container>

      <PlayButtons
        instruments={allInstruments}
        show={showPlayButtons}
        onHide={handleClosePlayButtons}
      />

      <InstrumentModal
        instrument={allInstruments[currentInstrumentNum]}
        instruments={toneInstruments}
        show={show}
        onHide={handleClose}
      />
    </div>
  );
}
