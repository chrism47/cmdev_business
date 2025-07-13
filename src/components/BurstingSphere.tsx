'use client';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRouter } from 'next/navigation';
import { Html } from '@react-three/drei'; // Add this line

interface Props {
  position: [number, number, number];
  link: string;
  label?: string; // Optional label prop
}

interface ParticleData {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  age: number;
  material: THREE.MeshStandardMaterial;
}

export default function BurstingSphere({ position, link, label }: Props) {
  const [burst, setBurst] = useState(false);
  const particles = useRef<ParticleData[]>([]);
  const mainSphere = useRef<THREE.Mesh>(null);
  const router = useRouter();

  const handleClick = () => {
    if (!burst && mainSphere.current) {
      for (let i = 0; i < 30; i++) {
        const material = new THREE.MeshStandardMaterial({
          color: 'white',
          transparent: true,
          opacity: 1,
        });

        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 8, 8),
          material
        );

        mesh.position.copy(mainSphere.current.position);

        const velocity = new THREE.Vector3(
          (Math.random() - 0.5) * 1.5,
          (Math.random() - 0.5) * 1.5,
          (Math.random() - 0.5) * 1.5
        );

        particles.current.push({
          mesh,
          velocity,
          age: 0,
          material,
        });
      }

      setBurst(true);
      setTimeout(() => {
        router.push(link);
      }, 200);
    }
  };

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (burst) {
      id = setTimeout(() => {
        particles.current.forEach((p) => {
          p.mesh.geometry.dispose();
          p.material.dispose();
        });

        particles.current = [];
      }, 2000);
    }
    return () => clearTimeout(id);
  }, [burst]);

  useFrame((_, delta) => {
    if (!burst) return;

    particles.current.forEach((p) => {
      p.mesh.position.add(p.velocity);
      p.velocity.multiplyScalar(0.95);
      p.age += delta;

      const fadeDuration = 3;
      const alpha = Math.max(1 - p.age / fadeDuration, 0);
      p.material.opacity = alpha;
    });
  });

  return (
    <>
      {!burst && (
        <mesh ref={mainSphere} position={position} onClick={handleClick}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="gray" />
          {label && (
            <Html position={[0, 0.8, 0]} center>
              <div style={{ color: 'white', fontWeight: 'bold', fontSize: '0.8rem', textAlign: 'center' }}>
                {label}
              </div>
            </Html>
          )}
        </mesh>
      )}
      {burst &&
        particles.current.map((p, i) => (
          <primitive key={i} object={p.mesh} />
        ))}
    </>
  );
}
