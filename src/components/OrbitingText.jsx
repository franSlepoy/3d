// src/components/OrbitingText.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import fontFile from '../assets/fonts/Alegreya-VariableFont_wght.ttf';

const OrbitingText = ({ text, position }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    ref.current.position.x = position[0] + Math.sin(elapsedTime * 0.1) * 0.5;
    ref.current.position.y = position[1] + Math.sin(elapsedTime * 0.1) * 0.5;
    ref.current.position.z = position[2] + Math.sin(elapsedTime * 0.1) * 0.5;
  });
  return (
    <Text
      ref={ref}
      color="black"
      anchorX="center"
      anchorY="middle"
      fontSize={0.5}
      position={position}
      font={fontFile}
    >
      {text}
    </Text>
  );
};

export default OrbitingText;

