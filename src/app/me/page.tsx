'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from "@/components/MenuScreen";
import Card from "@/components/Card";
import { title } from 'process';


function LoadingSpinner({ onComplete }: { onComplete?: () => void }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
      if (onComplete) onComplete();
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (showButton) {
    return (
      <a href="/">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        
        animate={{ opacity: 1, scale: 1 , x:-8}}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="mt-20 px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors duration-200"
        onClick={() => window.location.reload()}
      >
        Get Started
      </motion.button>
      </a>
    );
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="mt-20 animate-pulse rounded-full h-12 w-12 border-4 border-emerald-500"></div>
    </div>
  );
}

const frames = [
  {
    id: 0,
    content: (
      <div className="flex flex-col items-center justify-center m-5 ">
        {/* <img src="/ocean.png" className='w-40 h-40 rounded-full mb-10'/> */}
              <h1 className="font-mono typing  m-auto mb-12 text-4xl ">CMDev_Business</h1>

        <p>
          Are you a business owner looking for a reliable and efficient way to increase your online presence? 
          Look no further! 
          
          </p>
        <div className="absolute bottom-20 fade-slide-in  items-center text-stone-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    
    content: (
      <Card
        
        children={
          <div className="bg-stone-950 rounded-md w-8/12 p-4 m-auto text-left text-white shadow-lg shadow-stone-800">

            <p>
              As a skilled web developer, I can help you create a website that will attract and engage your target audience, increase your online visibility, and drive more sales. 
          Whether you need a simple website or a custom e-commerce solution, I can help you achieve your online goals.
            </p>
          </div>
        }
      
      />
    )
  },
  {
    id: 2,
    title: 'Projects',
    content: (
      <div className="grid grid-cols-2 gap-4">
      <a
        className="border bg-stone-950 border-white rounded px-4 py-2 mt-4"
        href="https://www.moultonc.dev/a-gent/chat"
        target="_blank"
        rel="noopener noreferrer"
      >
        AI Agent Assistant
        <p className="text-xs">My Personal Schill</p>
      </a>
      <a
        className="border bg-stone-950 border-white rounded px-4 py-2 mt-4"
        href="https://www.moultonc.dev/al-g/tool"
        target="_blank"
        rel="noopener noreferrer"
      >
        al-g 
        <p className="text-xs">DSA Visualizer</p>
      </a>
      </div>
      
    ),
  },
  {
    id: 3,
    title: 'More!',
    content: 
    <div>
      <p>Thank you for visiting. More to come!</p>
      <LoadingSpinner onComplete={() => {}} />
    </div>
    ,
  }

];

export default function InfoPage() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => {
      const next = (prevPage + newDirection + frames.length) % frames.length;
      return [next, newDirection];
    });
  };

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const current = frames[page];

  return (
    <div className="relative font-sans h-screen overflow-hidden bg-black text-white">
     <div>
     <a className="absolute  m-4 z-10 top-0 left-0 px-3 fade-slide-in py-1.5 rounded-full border"
           onClick={() => setShowWelcomeScreen(true)}>
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M342-160h276l40-160H302l40 160Zm0 80q-28 0-49-17t-28-44l-45-179h520l-45 179q-7 27-28 44t-49 17H342ZM200-400h560v-80H200v80Zm280-240q0-100 70-170t170-70q0 90-57 156t-143 80v84h320v160q0 33-23.5 56.5T760-320H200q-33 0-56.5-23.5T120-400v-160h320v-84q-86-14-143-80t-57-156q100 0 170 70t70 170Z"/></svg>
           </a>

           {showWelcomeScreen && <WelcomeScreen />}
      </div>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current.id}
          className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.8}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.y, velocity.y);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1); // swipe up → next
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1); // swipe down → prev
            }
          }}
        >
          <h1 className="text-6xl font-bold mb-4">{current.title}</h1>
          <div className="text-lg">{current.content}</div>
        </motion.div>
      </AnimatePresence>
      

      <footer>
        <p className="fixed  bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-mono text-gray-500 text-center typing">
          &copy; CMDev_Business 2025
        </p>
      </footer>
    </div>
  );
}