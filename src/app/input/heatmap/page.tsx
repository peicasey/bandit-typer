"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Link from 'next/link';
import "./heatmap.css";
import { poppins } from "@/app/fonts";

export default function Heatmap() {
    const [colorMap, setColorMap] = useState<{ [key: string]: string }>({});
    const [frequentlyUsed, setFrequentlyUsed] = useState<string>("");

    useEffect(() => {
      const item = localStorage.getItem('frequentlyUsed');
      setFrequentlyUsed(item ? item : "");
    }, []);

    // Effect to count frequency of a dummy string "qqwwerty" on mount
    useEffect(() => {
      // Function to count frequency of each character in the input
      const countFrequency = (text: string) => {
        const frequency: { [key: string]: number } = {};

        for (const char of text) {
            if (frequency[char]) {
                frequency[char] += 1;
            } else {
                frequency[char] = 1;
            }
        }     
        // Log the complete frequency object
        console.log("Complete frequency map:", frequency);
    
        assignColors(frequency);
      };

      const item = localStorage.getItem('frequentlyUsed');
      setFrequentlyUsed(item ? item : "");
      console.log(frequentlyUsed)

      countFrequency(frequentlyUsed);
    }, [frequentlyUsed]);

    // Function to assign colors based on frequency
    const assignColors = (frequency: { [key: string]: number }) => {
        const values = Object.values(frequency);
        if (values.length === 0) {
            return; // No data to process
        }

        const maxFrequency = Math.max(...values);
        const minFrequency = Math.min(...values);
        const threshold = (maxFrequency + minFrequency) / 2; // Define threshold as average of min and max

        const newColorMap: { [key: string]: string } = {};
        for (const key in frequency) {
            const freq = frequency[key];
            if (freq === maxFrequency) {
                newColorMap[key] = "hg-red"; // Most frequent
            } else if (freq === minFrequency) {
                newColorMap[key] = "hg-green"; // Least frequent
            } else if (freq > threshold) {
                newColorMap[key] = "hg-yellow"; // Above average frequency
            } else {
                newColorMap[key] = "hg-green"; // Below average frequency, or could use another color or gradient logic here
            }
        }
        setColorMap(newColorMap);
        console.log("Color map:", newColorMap);
    };

    const getButtonTheme = () => {
      return Object.entries(colorMap).map(([key, value]) => ({
          class: value,
          buttons: key
      }));
    };

    return (
      <main className="flex min-h-screen pt-[64px]">
        <div className='flex flex-col gap-8 bg-lightGreen p-16'>{/* Green canvas side */}
          {/* All content goes here */}
          <h1 className="text-firGreen font-bold text-6xl" style={poppins.style}>Here is your range of motion.</h1>
          
          <div className="text-gray-600 flex flex-col gap-4">
            <p>Are you surprised? Does this seem accurate?</p>
            <p>If not, go back and type a bit more. Otherwise, feel free to head onward!</p>
          </div>
          
          <div className="flex items-center gap-8">
            <Link href="/input"  className="bg-gray-400 hover:bg-[#8f9199] text-white text-center font-bold px-4 py-2 rounded-xl duration-200" style={poppins.style}>
              Let me go back and edit...
            </Link>
            <Link href="/output"  className="bg-calmGreen hover:bg-[#7ea77d] text-white text-center font-bold px-4 py-2 rounded-xl duration-200" style={poppins.style}>
              Looks good!
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-16"> {/* White canvas side */}
          <Keyboard
            theme="hg-theme-default hg-layout-default myTheme"
            layout={{
                default: [
                    "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                    "{tab} q w e r t y u i o p [ ] \\",
                    "{lock} a s d f g h j k l ; ' {enter}",
                    "{shift} z x c v b n m , . / {shift}",
                    ".com @ {space}"
                ]
            }}
            buttonTheme={getButtonTheme()}
          />
        </div>
      </main>
    );
}
