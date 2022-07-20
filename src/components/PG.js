import { Button, Container, Row, Col } from "react-bootstrap";

const PG = (function () {
  var initialized = false;
  var toneInstruments = null;

  function init() {
    genie1.initialize().then(() => {
      console.log("🧞‍♀️ ready!");
      // initialized = true;
    });
  }

  return {
    // public interface
    init: function () {
      init();
    },

    getToneInstruments: function () {
      return toneInstruments;
    },

    getGenie: function () {
      if (initialized) {
        return genie1;
      }
    }
  };
})();

//   function playToneInst(note) {
//     var letnum = Tone.Frequency(note, "midi").toNote();
//     console.log("playing tone: " + note.toString());
//     //    Tone.Transport.start();
//     toneInstruments["piano"].toMaster();
//     toneInstruments["piano"].triggerAttackRelease(letnum, 4);
//   }

//   return (
//     <Container>
//       <Row>
//         <Col xs={2} md={1}>
//           <Button id="i" onClick={() => init(0)}>
//             INIT
//           </Button>
//           <Button id="0" onClick={() => dong(0)}>
//             0
//           </Button>
//         </Col>
//         <Col xs={2} md={1}>
//           <Button id="1" onClick={() => dong(2)}>
//             1
//           </Button>
//         </Col>
//         <Col xs={2} md={1}>
//           <Button id="2" onClick={() => dong(4)}>
//             2
//           </Button>
//         </Col>
//         <Col xs={2} md={1}>
//           <Button id="3" onClick={() => dong(7)}>
//             3
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// const [modalShow, setModalShow] = useState(false);
export default PG;
