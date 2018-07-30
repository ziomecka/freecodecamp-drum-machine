import React, { KeyboardEvent } from 'react';
import ButtonModel from '../../models/button';

const style = require('./style.sass');

export interface ButtonProps {
  button: ButtonModel;
}

export interface ButtonState {
  display: string;
  className: string;
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    
    this.state = {
      display: this.props.button.title.toUpperCase(),
      className: style.button
    };
    
    this.props.button.keypressListener = (event: KeyboardEvent) => {
      event.preventDefault();
      if ((event.charCode || event.which || event.keyCode) === this.props.button.key) {
        this.handleClick();
      }
    };

    this.props.button.audioendedListener = () => {
      this.setState({
        display: this.props.button.title.toUpperCase(),
        className: style.button
      });
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    let $audio: HTMLMediaElement | null = this.$audio;
    
    if ($audio instanceof HTMLMediaElement) {
      if ($audio.paused) {
        $audio.play();
        
        this.setState({
          display: this.props.button.soundDescription.toLowerCase(),
          className: `${style.button} ${style['button-played']}`
        });
      } else {
        $audio.pause();
      }

      $audio = null;
    }
  }
  
  get $audio() {
    return document.getElementById(
      `audio-${this.props.button.id}`
    ) as HTMLMediaElement | null;
  }

  componentDidMount() {
    let $audio: HTMLMediaElement | null = this.$audio;

    if ($audio instanceof HTMLMediaElement) {
      $audio.addEventListener('ended', this.props.button.audioendedListener);
      $audio = null;
    }
    
    document.addEventListener('keypress', this.props.button.keypressListener);
  }
  
  componentWillUnmount() {
    let $audio: HTMLMediaElement | null = this.$audio;
  
    if ($audio instanceof HTMLMediaElement) {
      $audio.removeEventListener('ended', this.props.button.audioendedListener);
      $audio = null;
    }
    
    document.removeEventListener('keypress', this.props.button.keypressListener);
  }

  render() {
    return (
      <div
        id={`drum-pad-${this.props.button.id}`}
        className={this.state.className}
        onClick={this.handleClick}
      >
        <p>{this.state.display}</p>
        <audio
          id={`audio-${this.props.button.id}`}
          src={this.props.button.soundFile}
        />
      </div>
    );
  }
}
