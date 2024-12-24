import React from "react";
import Link from "next/link";
import { SiSvgdotjs } from "react-icons/si";
import { FaRegStar } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center w-full bg-zinc-100 bg-opacity-20 py-2 text-zinc-800 absolute top-0 left-0 z-20 backdrop-blur-sm">
      <div className="flex justify-between items-center w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] px-2 md:px-0 gap-2">
        <Link
          href="/"
          className="text-2xl font-semibold flex items-center gap-1"
        >
          <p>
            <SiSvgdotjs />
          </p>
          <p>SvgDots</p>
        </Link>
        <Link
          href={`https://github.com/Bluetooxth/SvgDots`}
          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-900 text-zinc-200 border-2 border-zinc-700 rounded-md flex items-center justify-center gap-1 text-md md:text-lg font-medium"
        >
          <FaRegStar className="inline-block" />
          Star on GitHub
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
