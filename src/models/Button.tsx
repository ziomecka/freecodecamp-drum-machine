export default interface ButtonModel {
  id: number;
  title: string;
  key: number;
  keypressListener: KeyboardEvent;
  audioendedListener: EventListenerOrEventListenerObject;
  soundDescription: string;
  soundFile: string;
}
