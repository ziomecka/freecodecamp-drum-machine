import React from 'react';
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
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  audioendedListener(event: any) {
    this.setState({
      display: this.props.button.title.toUpperCase(),
      className: style.button
    });
  
  }
  
  keypressListener(event: any) {
    event.preventDefault();
    if ((event.charCode || event.which || event.keyCode) === this.props.button.key) {
      this.handleClick();
    }
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
      $audio.addEventListener('ended', e => this.audioendedListener(e));
      $audio = null;
    }
    
    document.addEventListener('keypress', e => this.keypressListener(e));
  }
  
  componentWillUnmount() {
    let $audio: HTMLMediaElement | null = this.$audio;
  
    if ($audio instanceof HTMLMediaElement) {
      $audio.removeEventListener('ended', e => this.audioendedListener(e));
      $audio = null;
    }
    
    document.removeEventListener("keypress", e => this.keypressListener(e));
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
