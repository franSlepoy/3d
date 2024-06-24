// src/App.jsx

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "@fontsource/alegreya"; // Importar la fuente Alegreya

import OrbitingText from "./components/OrbitingText";
import SceneAudio from "./components/SceneAudio";
import Background from "./components/Background";
import NavBar from "./components/pages/navBar/NavBar";

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
  const y = (Math.random() - 0.5) * 20; // Random position within [-10, 10] for y-axis
  const z = distance * Math.sin(angle);
  return [x, y, z];
};

function App() {
  const radius = 400; // Define the radius for text distribution
  return (
    <>
     <NavBar/>
      <Canvas
        style={{
          height: "100vh",
          background: "linear-gradient(180deg, #00FF00 0%, #FFFFFF 100%)",
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <SceneAudio />
        <Background/>

        {texts.map((text, index) => (
          <OrbitingText
            key={index}
            text={text}
            position={generateRandomPosition(radius)}
          />
        ))}
        <OrbitControls 
        enableDamping={true}
        dampingFactor={0.5}
         />
      </Canvas>
    </>
  );
}

export default App;
