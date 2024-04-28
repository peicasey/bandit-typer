import Image from "next/image";
import { poppins } from "./fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-16 bg-lightGreen overflow-hidden">
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between gap-8 md:gap-16 p-8 md:p-16 pb-0 bg-white">
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
            <a href="/start" className="bg-calmGreen hover:bg-[#7ea77d] text-white text-center font-bold px-4 py-2 rounded-xl duration-200" style={poppins.style}>
              Get Started
            </a>
          </div>
        </div>
        <div className="bg-white w-full ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#CEEBD1" fillOpacity="1" d="M0,128L80,138.7C160,149,320,171,480,176C640,181,800,171,960,160C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 p-24 pt-0">
        <h2 className="text-xl sm:text-3xl font-bold" style={poppins.style}>Introduction and Motivation</h2>
        <p>
          We wanted to help users navigate the situational inaccessibility that arises when 
          a user has a limited range of motion that usual. For instance, when you can only 
          type with one hand -- ie. when cooking or when one hand 
          is wearing a sock puppet of colossal importance. These situations would change the 
          user&apos;s range of motion to favor keys nearer to the center of the keyboard over
          peripheral keys. 
        </p>
      </div>
      

      <div className="bg-[#7ea77d] w-full p-8 flex justify-center">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="rounded-lg overflow-hidden">
            <iframe className="w-[90vw] sm:w-[70vw] md:[50vw]" width="560" height="315" src="https://www.youtube.com/embed/3fmkckRbVb8?si=zWi8CGmjnJHZR0WB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div>
            <p className="text-xl italic">Check it out in action!</p>
          </div>
        </div>
      </div> 
      
      <div className="flex flex-col items-center gap-4 p-24">
        <h2 className="text-xl sm:text-3xl font-bold" style={poppins.style}>Presentation</h2>
        <div className="w-full rounded-lg overflow-hidden">
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR2737szAVvt62xXt-qIXaOoz_fA4dhrj4LeW1fqq_5zkCh3vkupJn__hRpHnORCz7QtUVp6O4_FUoW/embed?start=false&loop=true&delayms=3000" frameBorder="0" width="660" height="369" allowFullScreen></iframe>
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
