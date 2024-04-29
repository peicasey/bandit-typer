"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast"

import { poppins } from "@/app/fonts";
import Keyboard from "@/components/keyboard/keyboard";

export default function Output() {

  const [frequentlyUsed, setFrequentlyUsed] = useState("");

  useEffect(() => {
    const item = localStorage.getItem('frequentlyUsed');
    setFrequentlyUsed(item ? item : "");
    console.log(item)
  }, []);


  const [input, setInput] = useState("");
  const { toast } = useToast();
  var currentdate = new Date();

  console.log("OUTPUT - Frequently used:", frequentlyUsed);

  return (
    <main className="flex min-h-screen items-center justify-between p-24 gap-16 bg-lightGreen">
      <div className="flex flex-col gap-8 justify-between">
        <h1 className="text-firGreen  text-6xl font-bold" style={poppins.style}>
          Based on your range of motion, let&apos;s try this keyboard.
        </h1>
        <p className="text-gray-600">
          Give it a quick try!
        </p>
        <div className="flex flex-col gap-2">
          <button className="bg-calmGreen hover:bg-[#7ea77d] text-white text-center font-bold px-4 py-2 rounded-xl duration-200" 
            style={poppins.style}
            onClick={() => {
              toast({
                title: "Keyboard Layout",
                description: "Saved: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds(),
              })
            }}
          >
            save keyboard to profile
          </button>

          <Link href="/start"  className="bg-gray-400 hover:bg-[#8f9199] text-white text-center font-bold px-4 py-2 rounded-xl duration-200" style={poppins.style}>
            Go back to start
          </Link>
        </div>
      </div>
      <div>
        <div className="bg-white rounded-2xl p-4">
          <Keyboard 
            input={input} 
            setInput={setInput}
            frequentlyUsed={ frequentlyUsed ? frequentlyUsed : "" }
            useCustom={true}
          ></Keyboard>
        </div>
      </div>
    </main>
  );
}
