import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { throttle } from 'lodash';

const MouseLight = () => {
  const lightRef = useRef();
  const mouse = useRef(new THREE.Vector2());
  const { camera, viewport } = useThree();

  const updateLightPosition = throttle(() => {
    if (lightRef.current) {
      const vector = new THREE.Vector3(mouse.current.x, mouse.current.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      lightRef.current.position.copy(pos);
    }
  }, 16);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(updateLightPosition);

  return <pointLight ref={lightRef} intensity={5} distance={10} decay={2} castShadow />;
};

export default MouseLight;