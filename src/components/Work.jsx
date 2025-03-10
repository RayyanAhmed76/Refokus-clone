import React, { useState } from "react";
import { useScroll } from "motion/react";

function Work() {
  const [images, setimages] = useState([
    {
      image:
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isactive: false,
    },
    {
      image:
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isactive: false,
    },
    {
      image:
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isactive: false,
    },
    {
      image:
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isactive: false,
    },
    {
      image:
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isactive: false,
    },
    {
      image:
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isactive: false,
    },
  ]);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <div className="w-full mt-20 ">
      <div className="relative max-w-screen-xl mx-auto  leading-none tracking-tight text-center ">
        <h1 className="text-white text-[30vw]  font-medium select-none">
          Work
          <div className="w-full h-full top-0 absolute ">
            {images.map((item, index) => {
              return (
                item.isactive && (
                  <img
                    className=" absolute w-60 rounded-lg -transalte-x-[50%] -translate-y-[50%]"
                    src={item.image}
                    style={{ top: item.top, left: item.left }}
                  />
                )
              );
            })}
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Work;
