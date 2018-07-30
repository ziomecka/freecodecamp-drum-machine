export default interface ButtonModel {
  id: number;
  title: string;
  key: number;
  soundDescription: string;
  soundFile: string;
  audioendedListener?(event): EventListenerOrEventListenerObject;
  keypressListener?(event: KeyboardEvent): EventListenerOrEventListenerObject

}
