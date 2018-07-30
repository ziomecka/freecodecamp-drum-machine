import React from "react";
import Button from "../Button/index";

import {
  buttonHeater1,
  buttonHeater2,
  buttonHeater3,
  buttonHeater4,
  buttonHeater5,
  buttonKick1,
  buttonKick2,
  buttonOpenHH,
  buttonClap
} from "./buttons";

const style = require("./style");

export interface DrumProps {}

export interface DrumState {}

export default class Drum extends React.Component<DrumProps, DrumState> {
  render() {
    return (
      <div id="drum-machine" className={style.drum}>
        <Button button={buttonOpenHH} />
        <Button button={buttonClap} />
        <Button button={buttonKick1} />
        <Button button={buttonKick2} />
        <Button button={buttonHeater1} />
        <Button button={buttonHeater2} />
        <Button button={buttonHeater3} />
        <Button button={buttonHeater4} />
        <Button button={buttonHeater5} />
      </div>
    );
  }
}
