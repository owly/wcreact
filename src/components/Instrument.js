// import React, { useState } from "react";
import * as Tone from "tone";

class Instrument {
  // const [whiteKeysMin, set_whiteKeysMin] = useState(25);

  letterNotes = [
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

  constructor(
    instrumentName = "piano",
    volume = 0,
    noteDuration = 4,
    whiteKeysMin = 22,
    whiteKeysMax = 88,
    key = "C",
    scale = "major"
  ) {
    this.instrumentName = instrumentName;
    this.noteDuration = noteDuration;
    this.whiteKeysMin = whiteKeysMin;
    this.whiteKeysMax = whiteKeysMax;
    this.instrument = toneInstruments[this.instrumentName];
    this.keyIndex = this.letterNotes.indexOf(key);
    this.scale = scale;
    this.volume = volume;
    // this.keyWhitelistArr = [];
    this.updateWhiteKey();
  }

  static constructFromJson(jsonString) {
    let obj = JSON.parse(jsonString);
    return this.constructFromObject(obj);
  }

  static constructFromObject(obj) {
    return new Instrument(
      obj.instrumentName,
      obj.volume,
      obj.noteDuration,
      obj.whiteKeysMin,
      obj.whiteKeysMax,
      obj.key,
      obj.scale
    );
  }

  toJson() {
    let j = {};
    j["instrumentName"] = this.instrumentName;
    j["volume"] = this.volume;
    j["noteDuration"] = this.noteDuration;
    j["whiteKeysMin"] = this.whiteKeysMin;
    j["whiteKeysMax"] = this.whiteKeysMax;
    j["key"] = this.key;
    j["scale"] = this.scale;
    return JSON.stringify(j);
  }

  setKey(key) {
    this.keyIndex = this.letterNotes.indexOf(key);
    console.log("keyindex: " + this.keyIndex);
    this.updateWhiteKey();
  }
  setScale(scale) {
    this.scale = scale;
    this.updateWhiteKey();
  }
  setWhiteKeyMin(wkMin) {
    this.whiteKeysMin = wkMin;
    this.updateWhiteKey();
  }
  setWhiteKeyMax(wkMax) {
    this.whiteKeysMax = wkMax;
    this.updateWhiteKey();
  }

  setVolume(volume) {
    this.volume = volume;
    this.instrument.volume.value = volume;
  }

  setNoteDuration(noteDuration) {
    this.noteDuration = noteDuration;
  }

  scalesCalc = {
    major: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    minor: [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    none: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  };

  updateWhiteKey() {
    this.keyWhitelistArr = [];
    for (var i = this.whiteKeysMin; i <= this.whiteKeysMax; i++) {
      if (this.scalesCalc[this.scale][(i - this.keyIndex) % 12] == 1) {
        this.keyWhitelistArr.push(i);
      }
    }
    // console.log(this);
    console.log(this.keyWhitelistArr);
  }

  setInstrument(instrumentName) {
    this.instrumentName = instrumentName;
    this.instrument = toneInstruments[instrumentName].toMaster();
  }

  playGenie() {
    var num = Math.floor(Math.random() * 8);
    console.log("play genie rand" + num);
    return this.playGeniePitch8(num);
  }

  playGeniePitch8(num) {
    console.log("play pitch from num " + num);

    var note1 = genie1.nextFromKeyWhitelist(num, this.keyWhitelistArr, 0.25);
    var note1midi = note1 + 21;
    var letnum = Tone.Frequency(note1midi, "midi").toNote();
    console.log(note1);
    this.play(letnum);
    return letnum;
  }

  playGeniePitch4(num) {
    var maybeOne = Math.floor(Math.random() * 2);
    var eightBase = num * 2 + maybeOne;
    this.playGeniePitch8(eightBase);
  }

  play(note) {
    console.log("playing tone: " + note.toString());
    // var noteToPlay = Tone.Frequency(note, "midi").toNote();
    this.instrument.triggerAttackRelease(note, this.noteDuration);
  }
}

export default Instrument;
