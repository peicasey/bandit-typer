"use client"

import React, { useState, useEffect } from 'react';
import Keyboard from '../../components/keyboard/keyboard';
import { poppins } from "@/app/fonts";

const KeyMashingPage: React.FC = () => {
  const [input, setInput] = useState("");
  const [inputValue, setInputValue] = useState<string>('');
  const [keyCount, setKeyCount] = useState<number>(0);
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(true);
  const threshold = 5;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!showKeyboard) {
        setShowKeyboard(true);
        setShowImage(false);
      }
      const pressedKey = event.key;
      setInputValue(prevValue => prevValue + pressedKey);
      localStorage.setItem("userInput", inputValue + pressedKey); // Store updated input value in local storage
      setKeyCount(prevCount => prevCount + 1);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showKeyboard, inputValue]);

  const handleDoneClick = () => {
    console.log("User done typing");
    console.log(inputValue);
    localStorage.setItem("frequentlyUsed", inputValue);
    window.location.href = "/input/heatmap"; // Redirect to another page
  };

  const handleStartTypingClick = () => {
    setShowKeyboard(true);
    setShowImage(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-lightGreen p-5">
      <nav style={{ width: '100%', height: '64px', backgroundColor: '#88B28C', position: 'fixed', top: '0', left: '0', zIndex: '1000', display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
        <img src="bandit.png" alt="Logo" style={{ width: '56px', height: '40px', marginRight: '20px' }} />
      </nav>
      <div className="flex flex-row" style={poppins.style}>
        <div className="flex items-center justify-center mr-8 flex-grow">
          {showKeyboard && (
            <div className="bg-white rounded-lg p-8 shadow-lg max-h-screen">
              <div className="mr-4 mt-60"> {/* Add margin for separation */}
                <Keyboard input={input} setInput={setInput} frequentlyUsed={""} useCustom={true} />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col items-start justify-center">
          {showKeyboard && (
            <h1 className="text-4xl font-bold text-firGreen mb-4">
              {keyCount >= threshold ? "Looks good! :)" : "Start Key Mashing!"}
            </h1>
          )}
          {!showKeyboard && (
            <h1 className="text-4xl font-bold text-firGreen mb-4" style={poppins.style}>
              Typing Range of Motion Test
            </h1>
          )}
          <p className="text-lg mb-4" style={poppins.style}>
            {keyCount >= threshold
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
          {keyCount >= threshold && (
            <button 
              className="bg-calmGreen text-white font-semibold text-xl py-2 px-10 rounded"
              onClick={handleDoneClick}
            >
              Looks good, I&apos;m done typing
            </button>
          )}
          {showImage && (
            <div>
              <img src="bandit.png" alt="Placeholder Image" width="200" height="200"/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeyMashingPage;

