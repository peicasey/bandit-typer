"use client";

import Image from "next/image";
import { useState } from "react";

import { poppins } from "@/app/fonts";
import Keyboard from "@/components/keyboard/keyboard";

export default function Start() {

  const frequentlyUsed = localStorage.getItem('frequentlyUsed') ? localStorage.getItem('frequentlyUsed') : ""

  const [input, setInput] = useState("");

  console.log("OUTPUT - Frequently used:", frequentlyUsed);

  return (
    <main className="flex min-h-screen items-center justify-between p-24 gap-16 bg-lightGreen">
       <nav style={{ width: '100%', height: '64px', backgroundColor: '#88B28C', position: 'fixed', top: '0', left: '0', zIndex: '1000', display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
        <img src="bandit.png" alt="Logo" style={{ width: '56px', height: '40px', marginRight: '20px' }} />
      </nav>
      <div className="flex flex-col gap-8 justify-between">
          <h1 className="text-firGreen  text-6xl font-bold" style={poppins.style}>
            Based on your range of motion, let&apos;s try this keyboard.
          </h1>
          <p className="text-gray-600">
            Give it a quick try!
          </p>
        <button className="bg-calmGreen hover:bg-[#7ea77d] text-white text-center font-bold px-4 py-2 rounded-xl duration-200" style={poppins.style}>
          save keyboard to profile
        </button>
      </div>
      <div>
        <Keyboard 
          input={input} 
          setInput={setInput}
          frequentlyUsed={ frequentlyUsed ? frequentlyUsed : ""}
        ></Keyboard>
      </div>
    </main>
  );
}
