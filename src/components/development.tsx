"use client";

import { useState, useRef, useEffect } from 'react';

const STAGES = 
[
  {
    title: 'What to solve and why?',
    date: 'March 31',
    description: [
      "We decided our target domain and context, as well as problem statement.",
      "Our first idea was a migraine filter extension but we switched it since we felt that the keyboard would feel more tactile and interactive.", 
      "Afterwards we expanded on our target product with research on current design/state-of-the-art research.",
    ]
  },
  {
    title: 'Product prototype (1st iteration)',
    date: 'April 14',
    description: [
      "We created our initial low-fi mockup and user scenario (storyboard) on Figma.",
      "We also ran our needfinding study, documenting our study process, and compiling result & analysis",
      "See the results of our needfinding study in the 'User Evaluation Results' section below.",
    ]
  },
  {
    title: 'Presentation',
    date: 'April 22',
    description: [
      "We created a presentation and demo video for our project, presenting it to a group of our peers.",
      "From there we also recieved feedback on our project and made changes accordingly.",
      "See our presentation below in the 'Presentation & Demo' section!",
    ]
  },
  {
    title: 'Preliminary user evaluation for iteration (2nd iteration)',
    date: 'April 28',
    description: [
      "We created a high-fidelity prototype using Next.js (React and TypeScript) and Tailwind CSS, deployed on Vercel.",
      "Each person created a different portion of the prototype, which we combined them together, see more about who did what below!",
      "Afterwards, we had a user evaluation on the prototype, and you can see our method and results below.",
    ]
  },
  {
    title: 'Project Website',
    date: 'May 5',
    description: [
      "We compiled the final results of the project and created this website to showcase our work!",
    ]
  },

]

const delay = 2500;

const container = 
` 
  min-w-[90vw] sm:min-w-[75vw] h-[375px] sm:h-[300px] md:h-[250px] lg:h-[210px]
  px-8 pt-8 pb-12
  bg-white dark:bg-neutral-800
`
const content = "w-full flex flex-col"

const TL_pnt = 
`
  w-6 h-6 rounded-[50%]
  border-4 border-calmGreen
  cursor-pointer
  hover:bg-firGreen
  duration-500
`

export default function Development() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    // @ts-ignore: Unreachable code error
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === STAGES.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className='w-full flex flex-col justify-center'>
      <div className='w-full flex justify-center'>
        <div className="w-[90vw] sm:w-[75vw] rounded-lg overflow-hidden">
          <div
            className="flex no-wrap gap-0 duration-500 ease-in-out"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {STAGES.map((exp, index) => (

                <div key={index} className={container}
                  style={{
                    // '-webkit-mask-image': 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    // 'mask-image': 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  }}
                >
                  <div className={content}>
                    <div className='flex gap-8 items-center justify-between dark:text-white'>
                      <div>
                        <h2 className="text-md font-bold text-firGreen ">{exp.title}</h2>
                      </div>
                      
                      <div className='flex flex-col items-end'>
                        <p className='text-xs sm:text-sm'>{exp.date}</p>
                        <p className='text-xs sm:text-sm text-neutral-500 flex items-center gap-1'>
                        </p>
                      </div>
                      
                    </div>
                    <div className='mt-2 pl-4'>
                      <ul className='text-sm list-disc dark:text-neutral-400'>
                      {exp.description.map((desc, k) => (
                        <li className='mt-2' key={"li" + k}>{desc}</li>
                      ))}
                      </ul>
                    </div>
                    
                  </div>
                </div>

            ))}
          </div>
        </div>
        
      </div>
      <div className='mt-8'>
        <div className='flex items-stretch justify-between w-[100vw]'>   
          <div className='flex-grow h-6 flex items-center'>
            <div className='bg-calmGreen h-1 w-full'></div>
          </div>
          <div className='flex items-center'>     
            {STAGES.map((exp, idx) => (
              <div className='flex flex-col items-center justify-center' key={"stage" + idx}>
                <div className='flex items-center w-full '>
                  <div className=' bg-calmGreen h-1 flex-grow'></div>
                  <div
                    key={idx}
                    className={TL_pnt + `${index === idx ? " bg-calmGreen scale-110" : "bg-neutral-50 dark:bg-neutral-800"}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  ></div>
                  <div className=' bg-calmGreen h-1 flex-grow'></div>
                </div>
                <p className='mt-2 px-2 sm:px-4 text-center text-xs md:text-sm text-firGreen'>
                  {exp.date}
                </p>
              </div>
            ))}
          </div>
          <div className='flex-grow h-6 flex items-center'>
            <div className='bg-calmGreen h-1 w-full'></div>
          </div>
        </div>
        
      </div>
    </div>
    
  );
}
