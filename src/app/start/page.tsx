// import Image from "next/image";

// export default function Start() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-16">

//     </main>
//   );
// }
'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";

export default function Start() {
  const [currentPicture, setCurrentPicture] = useState('QWERTY.jpg');
  const [selectedLayout, setSelectedLayout] = useState('');

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
    <div
      style={{
        flex: '1',
        textAlign: 'center',
        cursor: 'pointer',
        color: selectedLayout === label ? '#88B28C' : '#7C847D', 
        textDecoration: selectedLayout === label ? 'underline' : 'none', 
      }}
      onClick={() => handleTextBoxClick(label)}
    >
      <p style={{ fontFamily: 'Inter', fontSize: '32px', fontWeight: 'bold' }}>{label}</p>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-16" style={{ backgroundColor: '#CEEBD1', position: 'relative' }}>
      <nav style={{ width: '100%', height: '64px', backgroundColor: '#88B28C', position: 'fixed', top: '0', left: '0', zIndex: '1000', display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
        <img src="bandit.png" alt="Logo" style={{ width: '56px', height: '40px', marginRight: '20px' }} />
      </nav>
      
      <h1 style={{ color: '#2E6A33', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '96px' }}>BanditTyper</h1>
      
      <div style={{ width: '90%', maxWidth: '1357px', height: '10%', maxHeight: '107px', backgroundColor: 'white', position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <TextBox label="QWERTY" />
        <TextBox label="AZERTY" />
        <TextBox label="CUSTOM" />
        <TextBox label="DVORAK" />
      </div>

      <p style={{ color: '#7C847D', position: 'absolute', bottom: 'calc(10% + 280px)', left: '50%', transform: 'translateX(-50%)', fontFamily: 'Inter', fontSize: '32px'}}>This is your current keyboard layout.</p>
      
      <img src={currentPicture} alt="Keyboard Layout" style={{ position: 'relative', bottom: '45%', left: '50%', transform: 'translate(-50%, 0)', maxWidth: '500px', width: '100%' }} />

      
      <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 'calc(10% + 180px)', left: '50%', transform: 'translateX(-50%)' }}>
        <Link href="/input">
          <button style={{ width: '333px', height: '60px', borderRadius: '20px', backgroundColor: '#88B28C', marginRight: '20px', fontFamily: 'Inter', fontWeight: 'bold', fontSize: '25px', color: 'white' }}>TAKE TYPING TEST</button>
        </Link>
        {/*DONT HAVE A ROUTE*/}
        <Link href="/more-layouts">
          <button style={{ width: '333px', height: '60px', borderRadius: '20px', backgroundColor: '#88B28C', fontWeight: 'bold', fontSize: '25px', fontFamily: 'Inter', color: 'white' }}>MORE LAYOUTS...</button>
        </Link>
      </div>
    </main>
  );
}
