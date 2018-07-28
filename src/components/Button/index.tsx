import React from "react";
import ButtonModel from "../../models/button";

const style = require("./style.sass");

export interface ButtonProps {
  button: ButtonModel;
}

export interface ButtonState {}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let $audio: HTMLMediaElement = document.getElementById(
      `audio-${this.props.button.id}`
    ) as HTMLMediaElement;

    if ($audio) {
      if ($audio.paused) {
        $audio.play();
      } else {
        $audio.pause();
      }
    }
  }

  render() {
    return (
      <div className={style.button} onClick={this.handleClick}>
        <audio
          src={this.props.button.soundFile}
          id={`audio-${this.props.button.id}`}
        />
      </div>
    );
  }
}
