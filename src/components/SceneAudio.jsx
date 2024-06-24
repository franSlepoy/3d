// src/components/SceneAudio.jsx
import React, { useRef, useEffect } from 'react';
import { AudioListener, PositionalAudio } from 'three';
import { useLoader } from '@react-three/fiber';
import { AudioLoader } from 'three';
import soundFile from '../assets/sounds/TheSoundOfPluto.mp3';

const SceneAudio = () => {
  const sound = useRef();
  const buffer = useLoader(AudioLoader, soundFile);

  useEffect(() => {
    const handleUserGesture = () => {
      if (sound.current && buffer) {
        sound.current.setBuffer(buffer);
        sound.current.setRefDistance(20);
        sound.current.setLoop(true);
        sound.current.setVolume(0.1);
        sound.current.play();
      }
    };

    window.addEventListener('click', handleUserGesture, { once: true });
    window.addEventListener('touchstart', handleUserGesture, { once: true });

    return () => {
      window.removeEventListener('click', handleUserGesture);
      window.removeEventListener('touchstart', handleUserGesture);
    };
  }, [buffer]);

  return <positionalAudio ref={sound} args={[new AudioListener()]} />;
};

export default SceneAudio;
