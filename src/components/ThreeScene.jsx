import { Canvas } from "@react-three/fiber";


const ThreeScene = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry  />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </Canvas>
  );
};

export default ThreeScene;
