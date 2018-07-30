export default function generateButtons(type: string) {
  const sounds = [];
  
  if ((type === 'heater') || (type === 'piano')) {
    for (let i: number = 0; i < 9; i++) {
      try {
        sounds.push(require(`../../sounds/${type}/sound_${i}.mp3`));
      } catch (err) {
        throw new Error("File not found.");    
      }
    }
  } else {
    throw new Error('Incorrect drum type.');
  }

  const button0 = {
    id: 0,
    title: "q",
    soundDescription: "open HH",
    key: 113,
    soundFile: sounds[0]
  };

  const button1 = {
    id: 1,
    title: "w",
    soundDescription: "clap",
    key: 119,
    soundFile: sounds[1]
  };

  const button2 = {
    id: 2,
    title: "e",
    soundDescription: "kick 1",
    key: 101,
    soundFile: sounds[2]
  };

  const button3 = {
    id: 3,
    title: "a",
    soundDescription: "kick 2",
    key: 97,
    soundFile: sounds[3]
  };

  const button4 = {
    id: 4,
    title: "s",
    soundDescription: "heater 1",
    key: 115,
    soundFile: sounds[4]
  };

  const button5 = {
    id: 5,
    title: "d",
    soundDescription: "heater 2",
    key: 100,
    soundFile: sounds[5]
  };

  const button6 = {
    id: 6,
    title: "z",
    soundDescription: "heater 3",
    key: 122,
    soundFile: sounds[6]
  };

  const button7 = {
    id: 7,
    title: "x",
    soundDescription: "heater 4",
    key: 120,
    soundFile: sounds[7]
  };

  const button8 = {
    id: 8,
    title: "c",
    soundDescription: "heater 5",
    key: 99,
    soundFile: sounds[8]
  };

  return [
    button0,
    button1,
    button2,
    button3,
    button4,
    button5,
    button6,
    button7,
    button8
  ];
};
