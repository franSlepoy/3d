// src/App.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Cone, OrbitControls, Text } from '@react-three/drei';
import "@fontsource/alegreya"; // Importar la fuente Alegreya
import fontFile from './assets/fonts/Alegreya-VariableFont_wght.ttf';
const texts = [
  "Somos",
  "somos sonido,",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto.",
  "Somos",
  "Somos forma",
  "Somos sonido",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto",
  "Somos",
  "somos sonido,",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto.",
  "Somos",
  "Somos forma",
  "Somos sonido",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto",
  "Somos",
  "somos sonido,",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto.",
  "Somos",
  "Somos forma",
  "Somos sonido",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto",
  "Somos",
  "somos sonido,",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto.",
  "Somos",
  "Somos forma",
  "Somos sonido",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto",
  "Somos",
  "somos sonido,",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto.",
  "Somos",
  "Somos forma",
  "Somos sonido",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto",
  "Somos",
  "somos sonido,",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto.",
  "Somos",
  "Somos forma",
  "Somos sonido",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto",
  "Somos",
  "somos sonido,",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto.",
  "Somos",
  "Somos forma",
  "Somos sonido",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto",
  "Somos",
  "somos sonido,",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto.",
  "Somos",
  "Somos forma",
  "Somos sonido",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto",
  "Somos",
  "somos sonido,",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto.",
  "Somos",
  "Somos forma",
  "Somos sonido",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto",
  "Somos",
  "somos sonido,",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto.",
  "Somos",
  "Somos forma",
  "Somos sonido",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto",
  "Somos",
  "somos sonido,",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto.",
  "Somos",
  "Somos forma",
  "Somos sonido",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto",
  "Somos",
  "somos sonido,",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto.",
  "Somos",
  "Somos forma",
  "Somos sonido",
  "somos colores, música,",
  "somos pensamientos y miradas,",
  "somos palabras,",
  "Somos humor, amor,",
  "Somos proyecto",
];

const generateRandomPosition = (radius) => {
  const angle = Math.random() * 2 * Math.PI;
  const distance = radius * Math.random();
  const x = distance * Math.cos(angle);
  const y = (Math.random() - 0.5) * 20;  // Random position within [-10, 10] for y-axis
  const z = distance * Math.sin(angle);
  return [x, y, z];
};

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

function App() {
  const radius = 400;  // Define the radius for text distribution
  return (
    <>
    
    <Canvas style={{width:"100%", height: '200px',  background: "black",  }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} />
        <pointLight position={[-20, -20, -20]} />

       <Cone/>
       
        <OrbitControls />
      </Canvas>
    
    
      <Canvas style={{ height: '80vh', background: "linear-gradient(180deg, #00FF00 0%, #FFFFFF 100%)" }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {texts.map((text, index) => (
          <OrbitingText
          
            key={index}
            text={text}
            position={generateRandomPosition(radius)}
          />
        ))}
        <OrbitControls />
      </Canvas>
     
    </>
  );
}

export default App;
