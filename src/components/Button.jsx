import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="w-40 px-4 py-2 bg-zinc-100 rounded-full flex justify-between items-center">
      <span className="text-black text-sm">{title}</span>
      <IoIosReturnRight className="text-black " />
    </div>
  );
}

export default Button;
