"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Keyboard from '../../components/keyboard/keyboard';
import { poppins } from "@/app/fonts";

const KeyMashingPage: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(true);
  const threshold = 5;


  const handleDoneClick = () => {
    console.log("User done typing");
    console.log(input);
    localStorage.setItem("frequentlyUsed", input);
    window.location.href = "/input/heatmap"; // Redirect to another page
  };

  const handleStartTypingClick = () => {
    setShowKeyboard(true);
    setShowImage(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-lightGreen p-5">
      <div className="flex flex-row" style={poppins.style}>
        <div className="flex items-center justify-center mr-8 flex-grow">
          {showKeyboard && (
            <div className="bg-white rounded-lg p-8 shadow-lg max-h-screen">
              <div className="mr-4 mt-60"> {/* Add margin for separation */}
                <Keyboard input={input} setInput={setInput} frequentlyUsed={""} useCustom={false} />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col items-start justify-center">
          {showKeyboard && (
            <h1 className="text-4xl font-bold text-firGreen mb-4">
              {input.length >= threshold ? "Looks good! :)" : "Start Key Mashing!"}
            </h1>
          )}
          {!showKeyboard && (
            <h1 className="text-4xl font-bold text-firGreen mb-4" style={poppins.style}>
              Typing Range of Motion Test
            </h1>
          )}
          <p className="text-lg mb-4" style={poppins.style}>
            {input.length >= threshold
              ? "You have typed enough characters — you can choose to continue typing or click the button below to proceed."
              : "In order to find your range-of-motion, please type random keys that are comfortable for you!"}
          </p>
          <p className="mb-6" style={poppins.style}>
            For best results, try to type for ~1 minute.
          </p>
          <div className="mb-6" style={poppins.style}>
            {!showKeyboard && (
              <button 
                className="bg-calmGreen text-white font-semibold text-xl py-2 px-10 rounded"
                onClick={handleStartTypingClick}
              >
                Click here to start typing
              </button>
            )}
          </div>
          {input.length >= threshold && (
            <button 
              className="bg-calmGreen text-white font-semibold text-xl py-2 px-10 rounded"
              onClick={handleDoneClick}
            >
              Looks good, I&apos;m done typing
            </button>
          )}
          {showImage && (
            <div>
              <Image src="/bandit.png" alt="" width={200} height={200}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeyMashingPage;

