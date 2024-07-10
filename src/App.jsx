import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import "@fontsource/alegreya";
import OrbitingText from "./components/OrbitingText";
import SceneAudio from "./components/SceneAudio";
import NavBar from "./components/pages/navBar/NavBar";
import Background from "./components/BackgroundShader";
import MouseLight from "./components/MouseLight";
import { BrowserRouter } from 'react-router-dom';

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
  "Somos proyecto"
];

const generateRandomPosition = (radius) => {
  const angle = Math.random() * 2 * Math.PI;
  const distance = radius * Math.random();
  const x = distance * Math.cos(angle);
  const y = (Math.random() - 0.5) * 20;
  const z = distance * Math.sin(angle);
  return [x, y, z];
};

function App() {
  const radius = 400;
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Canvas
        shadows
        style={{
          height: "100vh",
          background: "linear-gradient(180deg, #00FF00 0%, #FFFFFF 100%)"
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 50]} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
        <MouseLight />
        <Background />
        {texts.map((text, index) => (
          <OrbitingText
            key={index}
            text={text}
            position={generateRandomPosition(radius)}
            castShadow
            receiveShadow
          />
        ))}
        <OrbitControls enableDamping={true} dampingFactor={0.5} />
      </Canvas>
    </BrowserRouter>
  
    </>
  );
}

export default App;
