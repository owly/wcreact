import Instrument from "./Instrument";

var presetArray = {};

var leadPresetJson = `{
  "name": "Lead",
  "mp3": "lead.mp3",
  "loop": true,
  "presetTime": 180,
  "pauseWhenPlaying": false,
  "instruments": [
    {
      "instrumentName": "piano",
      "volume": "0",
      "noteDuration": "4",
      "whiteKeysMin": "22",
      "whiteKeysMax": "55",
      "key": "C",
      "scale": "major"
    },
    {
      "instrumentName": "marimba",
      "volume": "0",
      "noteDuration": "4",
      "whiteKeysMin": "47",
      "whiteKeysMax": "88",
      "key": "D",
      "scale": "minor"
    }
  ]
}`;

// let a = new Instrument(); //.constructFromJson({});
// a.setKey("C");

class Preset {
  constructor(name, instruments, mp3, scale, key) {
    this.name = name;
    this.instruments = instruments;
    this.mp3 = mp3;
    this.scale = scale;
    this.key = key;
  }

  static constructFromJson(json) {
    const obj = JSON.parse(json);
    let instrumentsJson = obj.instruments;
    let instruments = [];
    instrumentsJson.forEach((instrument) => {
      instruments.push(Instrument.constructFromObject(instrument));
    });
    return new Preset(obj.name, instruments, obj.mp3, obj.scale, json.key);
  }

  toJson() {
    let returnObject = {};
    returnObject["mp3"] = this.mp3;
    returnObject["scale"] = this.scale;
    returnObject["key"] = this.key;
    let instrumentObjs = [];
    this.instruments.forEach((instrument) => {
      instrumentObjs.push(JSON.parse(instrument.toJson()));
    });
    returnObject["instruments"] = instrumentObjs;
    return returnObject;
  }
}

var leadPreset = Preset.constructFromJson(leadPresetJson);
presetArray[leadPreset.name] = leadPreset;
// console.log(presetArray);

const allPresets = Object.freeze(presetArray);
export default allPresets;
