// components/PageCrumbleEffect.tsx
'use client';

import { useState } from 'react';

export default function PageCrumbleEffect() {
  const [startCrumble, setStartCrumble] = useState(false);

  const handleCrumble = () => {
    setStartCrumble(true);
  };

  return (
    <>
      {/* Main content */}
      <div className="fixed top-0 left-0 z-10 p-10 text-center">
        <button
          onClick={handleCrumble}
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Snap It
        </button>
      </div>

      {/* Crumble Overlay */}
      {startCrumble && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {Array.from({ length: 100 }).map((_, i) => {
            const x = (Math.random() - 0.5) * 400;
            const y = -Math.random() * 400;
            const r = (Math.random() - 0.5) * 360;
            const delay = Math.random() * 1.5;

            return (
              <div
                key={i}
                className="absolute w-[10vw] h-[10vh] bg-white dust-blowaway"
                style={{
                  top: `${Math.floor(i / 10) * 10}vh`,
                  left: `${(i % 10) * 10}vw`,
                  '--x': `${x}px`,
                  '--y': `${y}px`,
                  '--r': `${r}deg`,
                  animationDelay: `${delay}s`,
                } as React.CSSProperties}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
