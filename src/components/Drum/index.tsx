import React from "react";
import Button from "../Button";
import ButtonModel from "models/button";

const generateButtons: Function = require("./generate.buttons").default;

const style = require("./style");

export interface DrumProps {
  type: Array<string>
}

export interface DrumState {
  type: string; // heater | piano
}

export default class Drum extends React.Component<DrumProps, DrumState> {
  constructor(props: DrumProps) {
    super(props);
    this.state = {
      type: "piano"
    };
  }

  get buttonsList() {
    return generateButtons(this.state.type)
      .map((b: ButtonModel) => {
        return <Button button={b} />;
      });
  }
  
  render() {
    return (
      <div id="drum-machine" className={style.drum}>
        {this.buttonsList}
      </div>
    );
  }
}
