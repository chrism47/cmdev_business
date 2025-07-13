'use client';
import Scene from "./BubbleMenuScene";
import Link from "next/link";

export default function WelcomeScreen() {
  return (
    <div>
      
        <div className="fixed top-0 left-0 w-full h-full fade-in opacity-80 bg-stone-900 dark:bg-stone-800"></div>
        <Scene />
    <Link href="/"><h1 className="slide-in z-80 fixed bottom-4 left-1/2 transform -translate-x-1/2 text-center">
      Menu
    </h1>
    </Link>
    
    </div>
  );
}
