import React from "react";

function Marquee({ image }) {
  return (
    <div className="w-full gap-20 py-15 flex whitespace-nowrap overflow-hidden">
      {image.map((item) => (
        <img src={item} className="flex shrink-0 w-32" />
      ))}
      {image.map((item) => (
        <img src={item} className="flex shrink-0 w-32" />
      ))}
    </div>
  );
}

export default Marquee;
