import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Gear({ position, rotationSpeed = 1, scale = 1 }) {
  const ref = useRef();
  
  useFrame((state, delta) => {
    ref.current.rotation.z += 0.01 * rotationSpeed;
  });

  return (
    <mesh position={position} ref={ref} scale={scale}>
      <cylinderGeometry args={[1, 1, 0.2, 32]} />
      <meshStandardMaterial 
        color="#326a10" 
        metalness={0.8} 
        roughness={0.3} 
        emissive="#326a10" 
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export default function FloatingGears() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      
      {/* Engranajes flotantes */}
      <Gear position={[-5, 2, -10]} rotationSpeed={0.5} scale={1.5} />
      <Gear position={[3, -1, -15]} rotationSpeed={-0.7} scale={1.2} />
      <Gear position={[6, 4, -20]} rotationSpeed={0.3} scale={0.8} />
      <Gear position={[-2, -3, -25]} rotationSpeed={-0.4} scale={1} />
    </>
  );
}