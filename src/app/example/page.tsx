"use client"

// import Image from "next/image";
import React, { useState } from "react";

import Keyboard from "@/components/keyboard/keyboard";

export default function Example() {

    const [input, setInput] = useState("");

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-16">
            <h1>Example keyboard usage</h1>
            <Keyboard input={input} setInput={setInput} />
        </main>
    );
}
