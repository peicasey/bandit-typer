"use client";

import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import { useState } from "react";

import { poppins } from "@/app/fonts";
import Keyboard from "@/components/keyboard/keyboard";

export default function Start() {

  const searchParams = useSearchParams()
  const frequentlyUsed = searchParams.get('frequentlyUsed')

  const [input, setInput] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-between p-24 gap-16 bg-lightGreen">
      <div className="flex flex-col gap-8 justify-between">
          <h1 className="text-firGreen  text-6xl font-bold" style={poppins.style}>
            Based on your range of motion, let's try this keyboard.
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
