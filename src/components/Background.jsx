// src/components/Background.jsx
import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import image from "../assets/fonts/web-04.png"; // Importar la imagen
import { OrbitControls, Text } from "@react-three/drei";
import fontFile from "../assets/fonts/Alegreya-VariableFont_wght.ttf";

const Background = () => {
  const texture = useLoader(THREE.TextureLoader, image); // Usar la imagen importada

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <Text
          color="white"
          anchorX="center"
          anchorY="top"
          fontSize={0.1}
          position={[0, 0.3, 0]}
          font={fontFile}
        >
          SYNESTHESYA
        </Text>
      </mesh>
      <mesh position={[0.3, 0.03, 0]}>
        <coneGeometry attach="geometry" args={[0.3, 0.5, 3]} />{" "}
        {/* Usar planeGeometry en lugar de planeBufferGeometry */}
        <meshBasicMaterial attach="material" map={texture} />
       {/*  <OrbitControls 
      enableDamping={true}
      dampingFactor={0.02}
      rotateSpeed={0.2}
      zoomSpeed={0.2}
      panSpeed={0.2}

         /> */}
      </mesh>
    </>
  );
};

export default Background;
