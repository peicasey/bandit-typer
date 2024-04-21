import Image from "next/image";
import { poppins } from "./fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-16 bg-lightGreen">
      <div className="flex items-center justify-between gap-16">
        <div>
          <Image
            src="/bandit.png"
            alt=""
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl font-bold" style={poppins.style}>BanditTyper</h1>
          <p>
            An app to help users with a limited range of motion get the best typing experience! 
          </p>
          <button className="bg-calmGreen hover:bg-[#7ea77d] text-white font-bold px-4 py-2 rounded-xl duration-200" style={poppins.style}>
            Get Started
          </button>
        </div>
      </div>
      

      <h2 className="text-3xl font-bold" style={poppins.style}>Introduction and Motivation</h2>
      <p>
        We wanted to help users navigate the situational inaccessibility that arises when 
        a user has a limited range of motion that usual. For instance, when you can only 
        type with one hand -- ie. when cooking or when one hand 
        is wearing a sock puppet of colossal importance. These situations would change the 
        user&apos;s range of motion to favor keys nearer to the center of the keyboard over
        peripheral keys. 
      </p>

      <div className="rounded-lg overflow-hidden">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3fmkckRbVb8?si=zWi8CGmjnJHZR0WB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      <h2 className="text-3xl font-bold" style={poppins.style}>Presentation</h2>
      <div className="rounded-lg overflow-hidden">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR2737szAVvt62xXt-qIXaOoz_fA4dhrj4LeW1fqq_5zkCh3vkupJn__hRpHnORCz7QtUVp6O4_FUoW/embed?start=false&loop=true&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen></iframe>
      </div>

      <h2 className="text-3xl font-bold" style={poppins.style}>Conclusion and Future Work</h2>
      <p>
        We hope that BanditTyper can be a useful tool for users who need to type with one hand. 
        In the future, we hope to add more languages, a more advanced algorithm for assigning
        keys that takes into account the distance to reach keys and what characters are used
        frequently with each other.
      </p>

    </main>
  );
}
