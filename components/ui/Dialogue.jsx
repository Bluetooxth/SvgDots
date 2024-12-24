import React from "react";
import { IoClose } from "react-icons/io5";

const Dialogue = ({ name, code, onClose }) => {
  return (
    <section className="fixed inset-0 z-50 flex justify-center items-center h-screen overflow-y-scroll">
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-start justify-start">
        <div className="flex justify-between w-full items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Svg Code for {name}
          </h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-800 p-2 rounded-md border-2 border-red-600 hover:bg-red-600 hover:text-zinc-200 transition-all duration-300 ease-in-out"
          >
            <IoClose />
          </button>
        </div>
        <div className="w-full mt-5">
          <pre
            className="text-sm text-gray-600 font-mono overflow-auto bg-gray-100 p-4 rounded-lg"
            style={{
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            {code}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Dialogue;
