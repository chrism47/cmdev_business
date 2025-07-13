'use client';

import { useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import BurstingSphere from './BurstingSphere';
import ZoomingSphere from './ZoomingSphere';

function ResponsiveCamera() {
  const { camera, size } = useThree();
  const [aspect, setAspect] = useState(size.width / size.height);

  useEffect(() => {
    const handleResize = () => {
      const newAspect = window.innerWidth / window.innerHeight;
      setAspect(newAspect);

      // Adjust camera position based on width/height
      camera.position.z = 9 + (newAspect < 1 ? 2 : 0); // Pull back on taller screens
      camera.updateProjectionMatrix();
    };

    handleResize(); // on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [camera]);

  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 0, 5]}
      fov={50}
      aspect={aspect}
      near={0.1}
      far={100}
    />
  );
}


export default function Scene() {

  
  return (
    <div className="fade-slide-in opacity-95 fixed top-0 left-0 w-full h-full z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md" />
      <Canvas
        style={{
          background: "transparent"
        }}
      >
        <ResponsiveCamera />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        
        {/* top row */}
        {/* <BurstingSphere position={[-1.5, 1.5, 0]} label=""link="/" />
        <BurstingSphere position={[1.5, 1.5, 0]} label="" link="/test" />
        <ZoomingSphere position={[0, 1.5, 0]} label="" link="/" /> */}

        {/* middle row */}
        {/* <BurstingSphere position={[-1.5, 0, 0]} link="/" /> */}
        {/* <BurstingSphere position={[1.5, 0, 0]} link="/" /> */}
        <BurstingSphere position={[0, 0, 0]} label="Design" link="/" />   

        {/* bottom row */}
        
        <ZoomingSphere position={[-1.5, -1.5, 0]} label="AI" link="/ai" />
        
        <BurstingSphere position={[0, -1.5, 0]} label="Blog" link="/blog" />
        <BurstingSphere position={[1.5, -1.5, 0]} label="Me" link="/me" />

      </Canvas>
    </div>
  );
}
