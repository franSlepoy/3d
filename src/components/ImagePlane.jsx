// src/components/ImagePlane.jsx
import React from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const ImagePlane = ({ position, rotation }) => {
  const texture = useLoader(THREE.TextureLoader, '/src/assets/image/ojito.png');
  return (
    <mesh position={[-0.2,-5,0]} rotation={rotation}>
      <planeGeometry args={[20, 25]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default ImagePlane;
