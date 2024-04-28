"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Link from 'next/link';
import "./heatmap.css";

export default function Heatmap() {
    const [colorMap, setColorMap] = useState<{ [key: string]: string }>({});

    // Effect to count frequency of a dummy string "qqwwerty" on mount
    useEffect(() => {
      countFrequency("qqwwertyqpweopqeopqkpmsfiosjripofdopfgfogjbmdsufhsdnaibdiuhbncbzmxc,zmnbk;a owodj csidfsf ");
    }, []);

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
      <>
        <nav style={{ width: '100%', height: '64px', backgroundColor: '#88B28C', position: 'fixed', top: '0', left: '0', zIndex: '1000', display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
          <img src="/bandit.png" alt="Logo" style={{ width: '56px', height: '40px', marginRight: '20px' }} />
        </nav>
        <div style={{ display: 'flex', minHeight: 'calc(100vh)', paddingTop: '64px' }}>{/* Green canvas side */}
          <div style={{ width: '50%', backgroundColor: '#CEEBD1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', gap: '16px' }}>
            {/* All content goes here */}
            <h1 style={{ color: '#2E6A33', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '96px', marginTop: '0' }}>Here is your range of motion.</h1>
            <p style={{ color: '#7C847D', fontFamily: 'Inter', fontSize: '32px', textAlign: 'center' }}><br></br>Are you surprised? Does this seem accurate? <br/> If not, go back and type a bit more. Otherwise, feel free to head onward!</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <Link href="/input">
                <button style={{ width: '333px', height: '60px', borderRadius: '20px', backgroundColor: '#88B28C', fontFamily: 'Inter', fontWeight: 'bold', fontSize: '25px', color: 'white' }}>Let me go back and edit...</button>
              </Link>
              <Link href="/output">
                <button style={{ width: '333px', height: '60px', borderRadius: '20px', backgroundColor: '#88B28C', fontFamily: 'Inter', fontWeight: 'bold', fontSize: '25px', color: 'white' }}>Looks good!</button>
              </Link>
            </div>
          </div>
          <div style={{ width: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center' }}> {/* White canvas side */}
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
        </div>
      </>
    );
}
