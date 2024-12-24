import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full bg-zinc-800 py-2 text-zinc-200">
      <div className="flex flex-col justify-start items-center w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] px-2 md:px-0 gap-1">
        <p className="text-md md:text-lg font-medium flex gap-1 items-center">
          Maintained and developer by
          <Link
            href="https://priyanshuchahar.vercel.app"
            target="_blank"
            className="underline text-sky-500"
          >
            Priyanshu Chahar
          </Link>
        </p>
        <div className="h-[1px] bg-zinc-400 w-full"></div>
        <p className="text-sm md:text-md font-medium">
          &copy; {new Date().getFullYear()} SvgDots. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
