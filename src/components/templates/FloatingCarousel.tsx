'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = [
  { href: 'https://twitter.com', icon: '🐦' },
  { href: 'https://github.com', icon: '🐙' },
  { href: 'https://linkedin.com', icon: '💼' },
  { href: 'https://youtube.com', icon: '📺' },
  { href: 'https://twitch.tv', icon: '🎮' },
];

const randomOffset = () => 1 ;

export default function FloatingCarousel() {
  const [positions, setPositions] = useState(() =>
    links.map(() => ({
      x: randomOffset(),
      y: randomOffset(),
    }))
  );

  

  return (
    <div className="fixed top-20 left-5 w-full h-screen overflow-hidden flex justify-center items-center">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute text-3xl hover:scale-125 transition-transform"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: positions[index].x * 100, // Adjust multiplier for orbit radius
            y: positions[index].y * 100, // Adjust multiplier for orbit radius
            transition: {
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
            },
          }}
        >
          {link.icon}
        </motion.a>
      ))}
  
    </div>
  );
}
