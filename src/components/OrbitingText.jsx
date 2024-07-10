// src/components/OrbitingText.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Color } from 'three';
import fontFile from '../assets/fonts/Alegreya-VariableFont_wght.ttf';

const OrbitingText = ({ text, position }) => {
  const groupRef = useRef();
  const colors = ['#00FF00', '#FFFFFF', '#000000', '#FFFFFF', '#00FF00'];
  const colorDuration = 2; // duration in seconds for each color transition

  const interpolateColor = (color1, color2, factor) => {
    const c1 = new Color(color1);
    const c2 = new Color(color2);
    return c1.lerp(c2, factor).getStyle();
  };

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // Update the position of the group
    groupRef.current.position.x = position[0] + Math.sin(elapsedTime * 0.1) * 0.5;
    groupRef.current.position.y = position[1] + Math.sin(elapsedTime * 0.1) * 0.5;
    groupRef.current.position.z = position[2] + Math.sin(elapsedTime * 0.1) * 0.5;

    // Update the color of each letter
    const children = groupRef.current.children;
    for (let i = 0; i < children.length; i++) {
      const letterElapsed = elapsedTime - (i * colorDuration) / children.length;
      const colorIndex1 = Math.floor(letterElapsed / colorDuration) % colors.length;
      const colorIndex2 = (colorIndex1 + 1) % colors.length;
      const t = (letterElapsed % colorDuration) / colorDuration;
      children[i].color = interpolateColor(colors[colorIndex1], colors[colorIndex2], t);
    }
  });

  return (
    <group ref={groupRef}>
      {text.split('').map((letter, index) => (
        <Text
          key={index}
          color={colors[0]}
          anchorX="center"
          anchorY="middle"
          fontSize={0.5}
          position={[index * 0.3, 0, 0]} // Adjust spacing between letters if needed
          font={fontFile}
          
        >
          {letter}
        </Text>
      ))}
    </group>
  );
};

export default OrbitingText;
