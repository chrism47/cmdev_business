'use client';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRouter } from 'next/navigation';
import { Html } from '@react-three/drei';

interface Props {
  position: [number, number, number];
  link: string;
  label?: string;
}



export default function ZoomingSphere({ position, link, label }: Props) {
  const [zooming, setZooming] = useState(false);
  const sphereRef = useRef<THREE.Mesh>(null);
  const router = useRouter();
  const zoomSpeed = 6; // How fast it zooms toward the user
  const scaleSpeed = 4; // How fast it grows
  const fadeSpeed = 0.5; // How fast it fades

  const handleClick = () => {
    if (!zooming) {
      setZooming(true);
    }
  };

  useEffect(() => {
    if (zooming) {
      const timeout = setTimeout(() => {
        router.push(link);
      }, 200); // Allow time for animation before navigation
      return () => clearTimeout(timeout);
    }
  }, [zooming, link, router]);

  useFrame((_, delta) => {
    if (zooming && sphereRef.current) {
      // Move toward camera (assumes camera at z = 0)
      const direction = new THREE.Vector3(0, 0, -1);
      sphereRef.current.position.addScaledVector(direction, zoomSpeed * delta);

      // Scale up
      const scaleInc = 1 + scaleSpeed * delta;
      sphereRef.current.scale.multiplyScalar(scaleInc);

      // Fade out (opacity reduction)
      const material = sphereRef.current.material as THREE.MeshStandardMaterial;
      if (material.transparent !== true) material.transparent = true;
      material.opacity = Math.max(0, material.opacity - fadeSpeed * delta);
    }
  });

  return (
    <>

      <mesh
        ref={sphereRef}
        position={position}
        onClick={handleClick}
        scale={[1, 1, 1]}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="gray" opacity={1} transparent />
        {label && !zooming && (
            
          <Html position={[0, 0.8, 0]} center>
            <div
              style={{
                
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.8rem',
                textAlign: 'center',

              }}
            >
              {label}
            </div>
          </Html>
        )}
      </mesh>
    </>
  );
}
