"use client"

import Link from "next/link";
import { useRouter } from 'next/navigation'
import React, { useState } from "react";
import { poppins } from "@/app/fonts";

import Keyboard from "@/components/keyboard/keyboard";

export default function Example() {

    const [input, setInput] = useState("");
    const router = useRouter()

    const handlClick = () => {
        localStorage.setItem('frequentlyUsed', input);
        router.push('/output')
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-16">
            <h1>Example keyboard usage</h1>
            <Keyboard 
                input={input} setInput={setInput} 
                frequentlyUsed={""} 
                useCustom={false}
            />
            <button className="bg-calmGreen hover:bg-[#7ea77d] text-white text-center font-bold px-4 py-2 rounded-xl duration-200" style={poppins.style}
                onClick={handlClick}
            >Test Keyboard Rearranger</button>
        </main>
    );
}
