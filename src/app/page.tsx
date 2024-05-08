"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { poppins } from "./fonts";
import Chart from "@/components/chart";
import Development from "@/components/development";

const feedback = [
  "The UI looks really good!",
  "Was initially skeptical, but seems interesting and potentially useful. I'd definitely try it out!",
  "Bandit typer is really important since we rely so heavily on technology and typing, and mobility issues devastate someone's ability to type.", 
]

interface Contribution {
  name: string;
  contributions: string[];
  color: string;
}

const contributions : Contribution[] = [
  {
    name: "Victoria Chen",
    contributions: [
      "User study design and execution",
      "Input page development",
      "Start page design on Figma",
      "Acted and edited the demo video",
      "Presentation"
    ],
    color: "#428955",
  },
  {
    name: "Brigham Pettit",
    contributions: [
      "User study design and execution",
      "Keyboard layout generation algorithm development",
      "Output page design on Figma",
      "Acted in the demo video",
      "Presentation",
    ],
    color: "#b6d167",
  },
  {
    name: "Casey Pei",
    contributions: [
      "User study design and execution",
      "Output keyboard page and development",
      "Designed and created keyboard component",
      "Added page connections and redesigned initial designs on Figma",
      "Developed Milestone 4 page",
      "Presentation",
    ],
    color: "#fffea8",
  },
  {
    name: "Victoria Chiang",
    contributions: [
      "User study design and execution",
      "Start page design and development",
      "Upload file page design on Figma",
      "Presentation",
    ],
    color: "#56793c",
  },
  {
    name: "Patralika Ghosh",
    contributions: [
      "User study design and execution",
      "Heatmap generation page design and development",
      "Heatmap design page on Figma",
      "Presentation",
    ],
    color: "#e9ffd9",
  },
]

export default function Home() {

  const [contributor, setContributor] = useState("Victoria Chen");

  return (
    <main className="flex min-h-screen flex-col items-center gap-16 bg-lightGreen overflow-hidden pb-36">
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between gap-8 md:gap-16 p-8 md:p-16 pb-0 mt-20 bg-white">
          <div>
            <Image
              src="/bandit.png"
              alt=""
              width={500}
              height={500}
            ></Image>
          </div>
          <div className="flex flex-col gap-4 sm:gap-8">
            <h1 className="text-firGreen text-3xl sm:text-6xl font-bold" style={poppins.style}>BanditTyper</h1>
            <p>
              An app to help users with a limited range of motion get the best typing experience! 
            </p>
            <Link href="/start" className="bg-calmGreen hover:bg-[#7ea77d] text-white text-center font-bold px-4 py-2 rounded-xl duration-200" style={poppins.style}>
              Get Started
            </Link>
          </div>
        </div>
        <div>
          <div className="bg-white w-full ">
            <div className="absolute w-full translate-y-8">
              <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,0 C 301.5,44.5 603,89 843,89 C 1083,89 1261.5,44.5 1440,0 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#88B28C" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
            </div>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,0 C 301.5,44.5 603,89 843,89 C 1083,89 1261.5,44.5 1440,0 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#CEEBD1" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
          </div>
          <div className="z-[100] absolute w-full px-24 bg-calmGreen translate-y-[-10vh]">
            <h2 className="w-full text-center text-xl sm:text-3xl font-bold mb-4" style={poppins.style}>Introduction and Motivation</h2>
            <p>
              We wanted to help users navigate the situational inaccessibility that arises when 
              a user has a limited range of motion that usual. For instance, when you can only 
              type with one hand -- ie. when cooking or when one hand 
              is wearing a sock puppet of colossal importance. These situations would change the 
              user&apos;s range of motion to favor keys nearer to the center of the keyboard over
              peripheral keys. 
            </p>
          </div>
          <div className=" w-full rotate-180 ">
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,0 C 301.5,44.5 603,89 843,89 C 1083,89 1261.5,44.5 1440,0 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#88B28C" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
          </div>
        </div>
        
      </div>

      <div className="flex flex-col items-center gap-4 p-24 pb-30">
        <h2 className="text-xl sm:text-3xl font-bold" style={poppins.style}>Development Process</h2>
        <Development/>

        <h2 className="text-xl sm:text-3xl font-bold mt-16" style={poppins.style}>Individual Contributions</h2>
        <div className="flex gap-8 items-center">
          <div className="flex flex-col items-end">
            {contributions.map((c, i) => (
              <button key={i} className={`text-firGreen hover:text-black hover:translate-x-[-5px] duration-200 ${contributor === c.name ? 'font-bold' : ''}`} onClick={() => setContributor(c.name)} >
                {c.name}
              </button>
            ))}
          </div>
          <div className="flex-grow w-[54vw] h-[26vh]">
            {contributions.map((c, i) => (
              (contributor == c.name) &&
              (<div key={i} className="w-full h-full bg-[#aad2aa] rounded-xl px-8 py-6 flex gap-6 ">
                <div className="w-[50px] h-[50px] rounded-[50%] border-[1px] border-firGreen overflow-hidden" style={{"background": c.color}}>
                  <Image
                    src="/contributor.png"
                    alt=""
                    width={70}
                    height={70}
                    className=""
                  ></Image>
                </div>
                <div className="">
                  <p className="font-bold">{c.name}</p>
                  <ul className="list-disc text-sm ml-4">
                    {c.contributions.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>)
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#7ea77d] w-full p-8 flex justify-center">
        <div className="flex flex-col gap-8">
          <div className="rounded-lg overflow-hidden">
            <iframe className="w-[90vw] sm:w-[70vw] md:[50vw]" width="560" height="315" src="https://www.youtube.com/embed/ZAzpLgZpY60?si=5IIrXDY6a4lpsHhf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="w-full text-center">
            <p className="text-xl italic">Check it out in action!</p>
          </div>
        </div>
      </div> 
      
      <div className="flex flex-col items-center gap-4 p-8 pt-24">
        <h2 className="text-xl sm:text-3xl font-bold" style={poppins.style}>Presentation & Demo</h2>
        <div className="w-full flex justify-between gap-6">
          <div className="flex flex-col gap-4 p-2">
            <div className="w-full flex">
              <div className="bg-calmGreen hover:bg-[#7ea77d] p-4 flex gap-4 rounded-xl">
                <div className="rounded-lg overflow-hidden">
                  <iframe className="" width="160" height="100" src="https://www.youtube.com/embed/3fmkckRbVb8?si=zWi8CGmjnJHZR0WB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <h3 className="font-bold text-white" style={poppins.style}>Demo Video</h3>
                  <a href="https://youtu.be/3fmkckRbVb8?si=iNf8s61DsTmd9C9p" target="_blank" className="underline hover:decoration-dotted text-green-100 italic">Check it out here!</a>
                </div>
              </div>
            </div>
            <Link href="/start" className="bg-calmGreen hover:bg-[#7ea77d] text-white text-center font-bold px-4 py-2 rounded-xl duration-200" style={poppins.style}>
              Try it yourself!
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden ">
            <iframe className="flex-grow w-[50vw] h-[50vh]" src="https://docs.google.com/presentation/d/e/2PACX-1vR2737szAVvt62xXt-qIXaOoz_fA4dhrj4LeW1fqq_5zkCh3vkupJn__hRpHnORCz7QtUVp6O4_FUoW/embed?start=false&loop=true&delayms=3000" width="460" height="280" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 p-24 pb-0">
        <h2 className="text-xl sm:text-3xl font-bold" style={poppins.style}>User Evaluation Results</h2>
        <div className="w-full flex flex-col lg:flex-row gap-6 justify-between">
          <div className="bg-white rounded-xl p-6 flex-grow ">
            <Chart/>
          </div>
          <div className="flex flex-col">
            {feedback.map((f, i) => ( 
              <div key={i} className="bg-white rounded-xl p-4 my-4 text-sm italic hover:translate-x-2 duration-200">
                <p>&quot;{f}&quot;</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <p>
            We conducted a user evaluation with 5 users who have a limited range of motion to 
            see if there was a need for our product. What we found was that there was  
            a <b>significant (63%) decrease</b> in typing speed when users were had to 
            type with one hand. After presenting our prototype, users could immediately see how
            BanditTyper could be a useful tool for them.
          </p>
          <p>
            The biggest point of feedback that we recieved after our presentation was that there <b>may
            be a large learning curve for users who use muscle memory to type</b>. After careful consideration
            of this feedback, we still believe our product can bring value to users who have a limited range
            of motion for the following reasons:
          </p>
          <ul className="list-decimal ml-4">
            <li>
              <a href="https://wordsrated.com/typing-speed-statistics/" target="_blank" className="text-firGreen underline hover:decoration-dotted">
                50% of typists are not touch typists
              </a>, so they would not have to relearn muscle memory.
            </li>
            <li>In situations where a user&apos;s range of motion is often limited (ie. they regularly do tasks that limit their range of motion), the benefit of a new layout would outweigh the costs.</li>
            <li>BanditTyper can also generate keyboard layouts for mobile, where many users also don&apos;t touch type.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 p-24">
        <h2 className="text-xl sm:text-3xl font-bold" style={poppins.style}>Conclusion and Future Work</h2>
        <p>
          We hope that BanditTyper can be a useful tool for users who need to type with one hand. 
          In the future, we hope to add more languages, a more advanced algorithm for assigning
          keys that takes into account the distance to reach keys and what characters are used
          frequently with each other.
        </p>
      </div>
      

    </main>
  );
}
