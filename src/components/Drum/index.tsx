import React from "react";
import Button from "../Button/index";

import {
  buttonHeater1,
  buttonHeater2,
  buttonHeater3,
  buttonHeater4,
  buttonHeater5
} from "./buttons";

const style = require("./style");

export interface DrumProps {}

export interface DrumState {}

export default class Drum extends React.Component<DrumProps, DrumState> {
  render() {
    return (
      <div className={style.drum}>
        <Button button={buttonHeater1} />
        <Button button={buttonHeater2} />
        <Button button={buttonHeater3} />
        <Button button={buttonHeater4} />
        <Button button={buttonHeater5} />
      </div>
    );
  }
}
