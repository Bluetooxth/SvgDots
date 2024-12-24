import Link from "next/link";
import React from "react";
import { GiGearStickPattern } from "react-icons/gi";

const Home = () => {
  return (
    <section className="relative flex flex-col items-center justify-start h-screen">
      <div className="absolute inset-0" aria-hidden="true">
        <svg className="absolute w-full h-full opacity-[0.09]">
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M100 0 L100 100 M0 100 L100 100 M0 0 L100 0"
              stroke="#111111"
              fill="none"
              strokeWidth="0.5"
            />
            <circle cx="0" cy="0" r="2" fill="#111111" />
            <circle cx="100" cy="0" r="2" fill="#111111" />
            <circle cx="0" cy="100" r="2" fill="#111111" />
            <circle cx="100" cy="100" r="2" fill="#111111" />
            <path
              d="M50 0 L50 25 L75 25 L75 75 L25 75 L25 25"
              stroke="#111111"
              fill="none"
              strokeWidth="0.5"
            />
            <circle cx="50" cy="0" r="2" fill="#111111" />
            <circle cx="75" cy="25" r="2" fill="#111111" />
            <circle cx="75" cy="75" r="2" fill="#111111" />
            <circle cx="25" cy="75" r="2" fill="#111111" />
            <circle cx="25" cy="25" r="2" fill="#111111" />
          </pattern>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#circuit-pattern)"
          />
        </svg>
      </div>
      <div className="relative flex flex-col justify-center items-center h-full w-[95vw] md:w-[85vw] lg:w-[75vw] xl:w-[65vw]">
        <h2 className="text-4xl md:text-6xl font-semibold text-center">
          Welcome to SvgDots
        </h2>
        <p className="text-lg md:text-xl text-center mt-3 max-w-lg">
          Find the best SVG patterns for your projects among our collection of free
          SVG patterns.
        </p>
        <Link
          href="/svg-patterns"
          className="px-4 py-2 mt-3 bg-zinc-800 hover:bg-zinc-900 border-2 border-zinc-700 transition-all duration-300 ease-in-out text-white rounded-lg flex items-center justify-center gap-3 text-lg md:text-xl font-medium"
        >
          Get Started <GiGearStickPattern className="inline-block text-2xl" />
        </Link>
        <div className="flex items-center justify-center mt-3 gap-2">
          <p className="text-lg font-medium">Developed by</p>
          <Link href={"https://priyanshuchahar.vercel.app"} target="_blank" className="">
            <img
              src="https://avatars.githubusercontent.com/u/165533860?v=4"
              alt=""
              className="h-9 w-9 rounded-full object-cover hover:scale-110 hover:rounded-lg transition-all duration-300 ease-in-out"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
