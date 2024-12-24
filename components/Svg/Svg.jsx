"use client";
import React, { useState } from "react";
import patterns from "@/data/svg";
import { ImSvg } from "react-icons/im";
import { RiResetLeftFill } from "react-icons/ri";
import Dialogue from "../ui/Dialogue";

const Svg = () => {
  const [color, setColor] = useState("#ffffff");
  const [opacity, setOpacity] = useState(50);
  const [strokeColor, setStrokeColor] = useState("#ffffff");
  const [strokeWidth, setStrokeWidth] = useState(0);
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);
  const [selectedPattern, setSelectedPattern] = useState(null);

  const patternx = patterns(color, opacity, strokeWidth, strokeColor);

  const resetValues = () => {
    setColor("#ffffff");
    setOpacity(50);
    setStrokeColor("#ffffff");
    setStrokeWidth(0);
  };

  const openDialogue = (pattern) => {
    setIsDialogueOpen(true);
    setSelectedPattern(pattern);
  };

  const closeDialogue = () => {
    setIsDialogueOpen(false);
  };

  return (
    <section className="flex flex-col items-center justify-start w-full min-h-screen">
      <div className="flex flex-col justify-center items-center h-full w-[95vw] md:w-[85vw] lg:w-[75vw] xl:w-[65vw]">
        <h2 className="text-4xl font-semibold text-center mt-5">
          Svg Patterns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-5 mt-5 w-full bg-zinc-200 p-5 rounded-lg">
          <div className="flex flex-col justify-start items-center gap-2 w-full">
            <p className="text-xl font-medium self-start">Color code</p>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="#000000"
              className="p-2 rounded-md w-full outline-none bg-transparent border-2 border-zinc-700"
            />
            <p className="text-sm text-zinc-700 self-start flex flex-wrap items-center gap-1">
              <span className="text-red-500 text-xl font-semibold">{`*`}</span>{" "}
              Enter Hex code of the color
            </p>
          </div>
          <div className="flex flex-col justify-start items-center gap-2 w-full">
            <p className="text-xl font-medium self-start">Pattern opacity</p>
            <input
              type="number"
              value={opacity}
              onChange={(e) => setOpacity(e.target.value)}
              min="0"
              max="100"
              step="1"
              placeholder="69"
              className="p-2 rounded-md w-full outline-none bg-transparent border-2 border-zinc-700"
            />
            <p className="text-sm text-zinc-700 self-start flex flex-wrap items-center gap-1">
              <span className="text-red-500 text-xl font-semibold">{`*`}</span>{" "}
              Adjust the opacity of the pattern
              <span className="text-red-500">{`Max 100 & Min 0`}</span>
            </p>
          </div>
          <div className="flex flex-col justify-start items-center gap-2 w-full">
            <p className="text-xl font-medium self-start">Stroke color</p>
            <input
              type="text"
              value={strokeColor}
              onChange={(e) => setStrokeColor(e.target.value)}
              placeholder="#000000"
              className="p-2 rounded-md w-full outline-none bg-transparent border-2 border-zinc-700"
            />
            <p className="text-sm text-zinc-700 self-start flex flex-wrap items-center gap-1">
              <span className="text-red-500 text-xl font-semibold">{`*`}</span>{" "}
              Enter Hex code of the stroke color
            </p>
          </div>
          <div className="flex flex-col justify-start items-center gap-2 w-full">
            <p className="text-xl font-medium self-start">Stroke width</p>
            <input
              type="number"
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(e.target.value)}
              min="0"
              max="100"
              step="1"
              placeholder="0"
              className="p-2 rounded-md w-full outline-none bg-transparent border-2 border-zinc-700"
            />
            <p className="text-sm text-zinc-700 self-start flex flex-wrap items-center gap-1">
              <span className="text-red-500 text-xl font-semibold">{`*`}</span>{" "}
              Adjust the stroke width of the pattern
              <span className="text-red-500">{`Max 100 & Min 0`}</span>
            </p>
          </div>
          <button
            onClick={resetValues}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-900 text-zinc-200 border-2 border-zinc-700 rounded-md flex items-center justify-center gap-1 text-lg md:text-lg font-medium transition-all duration-300 ease-in-out"
          >
            Reset Values <RiResetLeftFill className="text-xl" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-stretch gap-4 mt-5 w-full">
          {patternx.map((pattern) => (
            <div
              key={pattern.id}
              className="p-2 pt-0 rounded-lg border-2 border-zinc-700 flex flex-col justify-center items-center gap-2 bg-zinc-800 col-span-1 w-full overflow-hidden"
            >
              <div dangerouslySetInnerHTML={{ __html: pattern.svg }} 
              />
              <p className="text-lg font-medium text-center self-start text-zinc-100 rounded-md">
                {pattern.name}
              </p>
              <button
                onClick={() => openDialogue(pattern)}
                className="px-4 py-1 bg-zinc-200 hover:bg-zinc-300 text-zinc-800 border-2 border-zinc-700 rounded-md flex items-center w-full justify-center gap-1 text-md md:text-lg font-medium"
              >
                <ImSvg className="inline-block" /> SVG Code
              </button>
            </div>
          ))}
        </div>
      </div>
      {isDialogueOpen && (
        <Dialogue
          name={selectedPattern.name}
          code={selectedPattern.svg}
          onClose={closeDialogue}
        />
      )}
    </section>
  );
};

export default Svg;
