'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";
import { poppins } from "@/app/fonts";

export default function Start() {
  const [currentPicture, setCurrentPicture] = useState('QWERTY.jpg');
  const [selectedLayout, setSelectedLayout] = useState('QWERTY');

  const handleTextBoxClick = (label: string) =>{
    let newPicture;
    switch (label) {
      case 'QWERTY':
        newPicture = 'QWERTY.jpg';
        break;
      case 'AZERTY':
        newPicture = 'AZERTY.jpg';
        break;
      case 'CUSTOM':
        // add CUSTOM layout
        break;
      case 'DVORAK':
        newPicture = 'DVORAK.jpg';
        break;
      default:
        newPicture = currentPicture;
    }
    // setCurrentPicture(newPicture);
    // setSelectedLayout(label); 
    setCurrentPicture(newPicture || ""); // Ensure newPicture is a string
    setSelectedLayout(label || "");
  };

  const TextBox = ({ label }: { label: string })=> (
    <div className="text-lg hover:translate-y-[-4px] hover:cursor-pointer duration-200 group"
      onClick={() => handleTextBoxClick(label)}
    >
      <p>{label}</p>
      <div className={`h-1 w-full bg-calmGreen rounded-lg ${selectedLayout === label ? 'opacity-100' : 'opacity-0'}`}></div>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-16" style={{ backgroundColor: '#CEEBD1', position: 'relative' }}>
      
      <h1 className='text-firGreen font-bold text-6xl' style={poppins.style}>BanditTyper</h1>
      
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src={"/" + currentPicture} alt="Current Keyboard Layout" width={500} height={100} />
        <p className="text-gray-700">This is your current keyboard layout.</p>
      </div>
      
      <div className="flex items-center justify-center gap-4">
        <Link href="/input" className="bg-calmGreen hover:bg-[#7ea77d] text-white text-center font-bold px-4 py-2 rounded-xl duration-200" style={poppins.style}>
          TAKE TYPING TEST
        </Link>
        <Link href="/more-layouts" className="bg-calmGreen hover:bg-[#7ea77d] text-white text-center font-bold px-4 py-2 rounded-xl duration-200" style={poppins.style}>
          MORE LAYOUTS...
        </Link>
      </div>

      <div className="bg-white px-8 py-4 rounded-2xl flex gap-8">
        <TextBox label="QWERTY" />
        <TextBox label="AZERTY" />
        <TextBox label="CUSTOM" />
        <TextBox label="DVORAK" />
      </div>
    </main>
  );
}
