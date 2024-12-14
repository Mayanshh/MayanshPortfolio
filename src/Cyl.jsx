import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

function Cyl() {
  const tex = useTexture('./assets/image.png');

  const cylRef = useRef();
  const groupRef = useRef();

  // GSAP animation on mount
  useEffect(() => {
    gsap.fromTo(
      groupRef.current.rotation,
      { y: 2.5, x: 0, z: -0.6 },
      { y: -1.5, x: 0, z: -0.2, duration: 2, ease: "power1.inOut" }
    );
  }, []);

  useFrame((state, delta) => {
    if (cylRef.current) {
      cylRef.current.rotation.y += (delta * 0.5); // Rotate the cylinder
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={cylRef}>
        <cylinderGeometry args={[1, 1, 1, 80, 80, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default Cyl;