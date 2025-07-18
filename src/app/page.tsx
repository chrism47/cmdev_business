'use client';
import { useState } from "react";
import WelcomeScreen from "@/components/MenuScreen";

export default function Home() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen   ">
      {/* <div className=" bg-cover bg-[url('/ocean.png')] w-screen h-fit"> */}

      <main className="flex flex-col  row-start-2  sm:items-start">
<div className="fixed top-20 left-1/2 transform -translate-x-1/2 max-w-md w-full bg-red-400 rounded-lg text-white text-center p-2">
  <p>
    This page is unfinished. Visit{' '}
    <a href="https://www.moultonc.dev" className="underline">
      www.moultonc.dev
    </a>{' '}
    or contact me via social media for more information.
  </p>
</div>
      
      <h1 className="font-mono typing  text-center text-4xl ">CMDev_Business</h1>
      </main>
      {/* </div> */}
      <a className="px-3 fade-slide-in py-1.5  mt-100 rounded-full border"
      onClick={() => setShowWelcomeScreen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M342-160h276l40-160H302l40 160Zm0 80q-28 0-49-17t-28-44l-45-179h520l-45 179q-7 27-28 44t-49 17H342ZM200-400h560v-80H200v80Zm280-240q0-100 70-170t170-70q0 90-57 156t-143 80v84h320v160q0 33-23.5 56.5T760-320H200q-33 0-56.5-23.5T120-400v-160h320v-84q-86-14-143-80t-57-156q100 0 170 70t70 170Z"/></svg>
      </a>
      {showWelcomeScreen && <WelcomeScreen />}
      <hr className="fixed bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 border-2 border-white" />
    </div>
  );
}
