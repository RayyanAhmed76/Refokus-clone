import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-[16.66%] text-white flex justify-between px-10 py-5 border-t-1 border-b-1 border-r-1 border-zinc-600 ">
      <img src={val.url} alt="" />
      <h1>{val.number}</h1>
    </div>
  );
}

export default Stripe;
