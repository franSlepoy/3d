// customGeometri.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

function CustomGeometry() {
  // Utiliza useLoader para cargar texturas u otros assets si es necesario
  const texture = useLoader(THREE.TextureLoader, '/path_to_your_texture.jpg');

  // Define la geometría y los materiales aquí
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ map: texture });

  return (
    <Canvas>
      <mesh geometry={geometry} material={material} />
    </Canvas>
  );
}

export default CustomGeometry;
