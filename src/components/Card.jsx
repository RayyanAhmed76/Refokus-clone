import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover }) {
  return (
    <div
      className={`text-white bg-zinc-800 ${width}  p-5 rounded-xl min-h-[32rem] hover:${hover} flex flex-col justify-between `}
    >
      <div className="w-full">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-medium font-regular">One Handing</h1>
          <IoIosArrowRoundForward className="text-2xl" />
        </div>
        <h1 className="text-2xl">Whatever Heading</h1>
      </div>
      <div>
        {start && (
          <>
            <h1 className="text-6xl  ">Start a Project</h1>
            <button className="rounded-full px-5 py-2 border-1 border-zinc-200 mt-5">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="mt-3 text-zinc-500 text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
