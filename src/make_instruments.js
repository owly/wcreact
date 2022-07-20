function make_Instrument_Marimba() {
  // create synth
  var instrument = new Tone.Synth();
  var synthJSON = {
    oscillator: {
      partials: [1, 0, 2, 0, 3]
    },
    envelope: {
      attack: 0.001,
      decay: 1.2,
      sustain: 0,
      release: 1.2
    }
  };

  instrument.set(synthJSON);

  var effect1, effect2, effect3;

  // create effects
  var effect2 = new Tone.PingPongDelay();
  effect2JSON = {
    delayTime: "8n",
    feedback: 0.6,
    wet: 0.5
  };
  effect2.set(effect2JSON);

  // make connections
  instrument.connect(effect2);
  effect2.connect(Tone.Master);

  // define deep dispose function
  function deep_dispose() {
    if (effect1 != undefined && effect1 != null) {
      effect1.dispose();
      effect1 = null;
    }
    if (effect2 != undefined && effect2 != null) {
      effect2.dispose();
      effect2 = null;
    }
    if (effect3 != undefined && effect3 != null) {
      effect3.dispose();
      effect3 = null;
    }
    if (instrument != undefined && instrument != null) {
      instrument.dispose();
      instrument = null;
    }
  }

  return {
    instrument: instrument,
    deep_dispose: deep_dispose
  };
}

function make_Instrument2() {
  // create synth
  var instrument = new Tone.MonoSynth();
  var synthJSON = {
    oscillator: {
      type: "fmsquare5",
      modulationType: "triangle",
      modulationIndex: 2,
      harmonicity: 0.501
    },
    filter: {
      Q: 1,
      type: "lowpass",
      rolloff: -24
    },
    envelope: {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.4,
      release: 2
    },
    filterEnvelope: {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.8,
      release: 1.5,
      baseFrequency: 50,
      octaves: 4.4
    }
  };

  instrument.set(synthJSON);

  var effect1, effect2, effect3;

  // create effects
  var effect1 = new Tone.FeedbackDelay();
  effect1JSON = {
    delayTime: "8n",
    feedback: 0.4,
    wet: 0.5
  };
  effect1.set(effect1JSON);

  // make connections
  instrument.connect(effect1);
  effect1.connect(Tone.Master);

  // define deep dispose function
  function deep_dispose() {
    if (effect1 != undefined && effect1 != null) {
      effect1.dispose();
      effect1 = null;
    }
    if (effect2 != undefined && effect2 != null) {
      effect2.dispose();
      effect2 = null;
    }
    if (effect3 != undefined && effect3 != null) {
      effect3.dispose();
      effect3 = null;
    }
    if (instrument != undefined && instrument != null) {
      instrument.dispose();
      instrument = null;
    }
  }

  return {
    instrument: instrument,
    deep_dispose: deep_dispose
  };
}

function make_Instrument1() {
  // create synth
  var instrument = new Tone.MonoSynth();
  var synthJSON = {
    oscillator: {
      type: "fmsquare5",
      modulationType: "triangle",
      modulationIndex: 2,
      harmonicity: 0.501
    },
    filter: {
      Q: 1,
      type: "lowpass",
      rolloff: -24
    },
    envelope: {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.4,
      release: 2
    },
    filterEnvelope: {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.8,
      release: 1.5,
      baseFrequency: 50,
      octaves: 4.4
    }
  };

  instrument.set(synthJSON);

  var effect1, effect2, effect3;

  // create effects
  var effect1 = new Tone.Distortion();
  effect1JSON = {
    distortion: 0.6,
    wet: 0.5
  };
  effect1.set(effect1JSON);

  // make connections
  instrument.connect(effect1);
  effect1.connect(Tone.Master);

  // define deep dispose function
  function deep_dispose() {
    if (effect1 != undefined && effect1 != null) {
      effect1.dispose();
      effect1 = null;
    }
    if (effect2 != undefined && effect2 != null) {
      effect2.dispose();
      effect2 = null;
    }
    if (effect3 != undefined && effect3 != null) {
      effect3.dispose();
      effect3 = null;
    }
    if (instrument != undefined && instrument != null) {
      instrument.dispose();
      instrument = null;
    }
  }

  return {
    instrument: instrument,
    deep_dispose: deep_dispose
  };
}

function make_InstrumentBass() {
  // create synth
  var instrument = new Tone.MonoSynth();
  var synthJSON = {
    oscillator: {
      type: "fmsquare5",
      modulationType: "triangle",
      modulationIndex: 2,
      harmonicity: 0.501
    },
    filter: {
      Q: 1,
      type: "lowpass",
      rolloff: -24
    },
    envelope: {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.4,
      release: 2
    },
    filterEnvelope: {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.8,
      release: 1.5,
      baseFrequency: 50,
      octaves: 4.4
    }
  };

  instrument.set(synthJSON);

  var effect1, effect2, effect3;

  // create effects
  var effect1 = new Tone.Distortion();
  effect1JSON = {
    distortion: 0.6,
    wet: 0.5
  };
  effect1.set(effect1JSON);

  var effect2 = new Tone.JCReverb();
  effect2JSON = {
    roomSize: 0.5,
    wet: 0.5
  };
  effect2.set(effect2JSON);

  // make connections
  instrument.connect(effect1);
  effect1.connect(effect2);
  effect2.connect(Tone.Master);

  // define deep dispose function
  function deep_dispose() {
    if (effect1 != undefined && effect1 != null) {
      effect1.dispose();
      effect1 = null;
    }
    if (effect2 != undefined && effect2 != null) {
      effect2.dispose();
      effect2 = null;
    }
    if (effect3 != undefined && effect3 != null) {
      effect3.dispose();
      effect3 = null;
    }
    if (instrument != undefined && instrument != null) {
      instrument.dispose();
      instrument = null;
    }
  }

  return {
    instrument: instrument,
    deep_dispose: deep_dispose
  };
}

function make_InstrumentDuoSynth() {
  // create synth
  var instrument = new Tone.DuoSynth();
  var synthJSON = {
    vibratoAmount: 0.5,
    vibratoRate: 5,
    harmonicity: 1.5,
    voice0: {
      volume: -1,
      portamento: 0,
      oscillator: {
        type: "sine"
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      },
      envelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    },
    voice1: {
      volume: -1,
      portamento: 0,
      oscillator: {
        type: "sine"
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      },
      envelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    }
  };

  instrument.set(synthJSON);

  var effect1, effect2, effect3;

  // make connections
  instrument.connect(Tone.Master);

  // define deep dispose function
  function deep_dispose() {
    if (effect1 != undefined && effect1 != null) {
      effect1.dispose();
      effect1 = null;
    }
    if (effect2 != undefined && effect2 != null) {
      effect2.dispose();
      effect2 = null;
    }
    if (effect3 != undefined && effect3 != null) {
      effect3.dispose();
      effect3 = null;
    }
    if (instrument != undefined && instrument != null) {
      instrument.dispose();
      instrument = null;
    }
  }

  return {
    instrument: instrument,
    deep_dispose: deep_dispose
  };
}

function make_InstrumentDuoSynth2() {
  // create synth
  var instrument = new Tone.DuoSynth();
  var synthJSON = {
    vibratoAmount: 0.5,
    vibratoRate: 5,
    harmonicity: 1.5,
    voice0: {
      volume: -10,
      portamento: 0,
      oscillator: {
        type: "sine"
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      },
      envelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    },
    voice1: {
      volume: -20,
      portamento: 0,
      oscillator: {
        type: "sine"
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      },
      envelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    }
  };

  instrument.set(synthJSON);

  var effect1, effect2, effect3;

  // make connections
  instrument.connect(Tone.Master);

  // define deep dispose function
  function deep_dispose() {
    if (effect1 != undefined && effect1 != null) {
      effect1.dispose();
      effect1 = null;
    }
    if (effect2 != undefined && effect2 != null) {
      effect2.dispose();
      effect2 = null;
    }
    if (effect3 != undefined && effect3 != null) {
      effect3.dispose();
      effect3 = null;
    }
    if (instrument != undefined && instrument != null) {
      instrument.dispose();
      instrument = null;
    }
  } // duo synth

  return {
    instrument: instrument,
    deep_dispose: deep_dispose
  };
}

function make_InstrumentMembraneSynthTom() {
  // create synth
  var instrument = new Tone.MembraneSynth();
  var synthJSON = {
    pitchDecay: 0.2,
    octaves: 1.2,
    oscillator: {
      type: "sine"
    },
    envelope: {
      attack: 0.001,
      decay: 0.8,
      sustain: 0.01,
      release: 1.4,
      attackCurve: "exponential"
    }
  };

  instrument.set(synthJSON);

  var effect1, effect2, effect3;

  // create effects
  var effect1 = new Tone.PitchShift();
  effect1JSON = {
    pitch: 2,
    windowSize: 0.04,
    delayTime: 0.03,
    feedback: 0.5,
    wet: 0.5
  };
  effect1.set(effect1JSON);

  // make connections
  instrument.connect(effect1);
  effect1.connect(Tone.Master);

  // define deep dispose function
  function deep_dispose() {
    if (effect1 != undefined && effect1 != null) {
      effect1.dispose();
      effect1 = null;
    }
    if (effect2 != undefined && effect2 != null) {
      effect2.dispose();
      effect2 = null;
    }
    if (effect3 != undefined && effect3 != null) {
      effect3.dispose();
      effect3 = null;
    }
    if (instrument != undefined && instrument != null) {
      instrument.dispose();
      instrument = null;
    }
  }

  return {
    instrument: instrument,
    deep_dispose: deep_dispose
  };
}

function make_InstrumentDuoSynth2() {
  // create synth
  var instrument = new Tone.DuoSynth();
  var synthJSON = {
    vibratoAmount: 0.5,
    vibratoRate: 5,
    harmonicity: 1.5,
    voice0: {
      volume: -10,
      portamento: 0,
      oscillator: {
        type: "sine"
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      },
      envelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    },
    voice1: {
      volume: -20,
      portamento: 0,
      oscillator: {
        type: "sine"
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      },
      envelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    }
  };

  instrument.set(synthJSON);

  var effect1, effect2, effect3;

  // make connections
  instrument.connect(Tone.Master);

  // define deep dispose function
  function deep_dispose() {
    if (effect1 != undefined && effect1 != null) {
      effect1.dispose();
      effect1 = null;
    }
    if (effect2 != undefined && effect2 != null) {
      effect2.dispose();
      effect2 = null;
    }
    if (effect3 != undefined && effect3 != null) {
      effect3.dispose();
      effect3 = null;
    }
    if (instrument != undefined && instrument != null) {
      instrument.dispose();
      instrument = null;
    }
  } // duo synth

  return {
    instrument: instrument,
    deep_dispose: deep_dispose
  };
}
