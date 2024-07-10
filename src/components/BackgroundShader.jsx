// src/components/BackgroundShader.js

import React, { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

// Definir el shader material
const BackgroundMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.5);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    varying vec2 vUv;
    
    void main() {
      vec3 color1 = vec3(0.0, 1.0, 0.0); // Verde
      vec3 color2 = vec3(1.0, 1.0, 1.0); // Blanco
      vec3 color3 = vec3(0.0, 0.0, 0.0); // Negro

      vec2 st = vUv;
      st.x += sin(st.y * 10.0 + uTime * 0.4) * 0.1;
      st.y += cos(st.x * 10.0 + uTime * 0.4) * 0.1;

      vec3 color = mix(color1, color2, smoothstep(0.0, 0.5, st.x));
      color = mix(color, color3, smoothstep(0.5, 1.0, st.y));

      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ BackgroundMaterial });

const Background = () => {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    materialRef.current.uTime = clock.getElapsedTime();
  });

  return (
    <mesh rotation={[ 2, 0, 0]} position={[0, 0, 45]} receiveShadow>
      <boxGeometry args={[10, 10, 10, 1]} />
      <backgroundMaterial ref={materialRef} />
    </mesh>
  );
};

export default Background;
