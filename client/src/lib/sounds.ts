import { Howl } from 'howler';

const sounds = {
  click: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'],
    volume: 0.5,
  }),
  hover: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3'],
    volume: 0.2,
  }),
  alert: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/995/995-preview.mp3'],
    volume: 0.4,
    loop: true,
  }),
  access_granted: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'],
    volume: 0.6,
  }),
  typing: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2366/2366-preview.mp3'],
    volume: 0.1,
  })
};

export const playSound = (name: keyof typeof sounds) => {
  // In a real app, we'd handle user interaction policy first
  // For this prototype, we'll try/catch or assume interaction happened
  try {
    sounds[name].play();
  } catch (e) {
    console.error("Audio play failed", e);
  }
};

export const stopSound = (name: keyof typeof sounds) => {
  sounds[name].stop();
};
