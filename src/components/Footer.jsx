import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex gap-40">
        <div className="basis-1/2  ">
          <h1 className="text-white font-medium text-[11.5rem]">Refokus.</h1>
        </div>
        <div className=" basis-1/2 flex gap-2 py-20">
          <div className=" basis-1/3  ">
            <h1 className="capitalize text-zinc-500 mb-5 ">social</h1>
            {["Instagram", "Twitter (x?)", "LinkedIn"].map((item, index) => (
              <a className=" block flex flex-col text-zinc-700 capitalize whitespace-nowrap ">
                {item}
              </a>
            ))}
          </div>
          <div className=" basis-1/3  ">
            <h1 className="capitalize text-zinc-500 mb-5 ">sitemap</h1>
            {["Home", "Work", "Careers", "Cantact"].map((item, index) => (
              <a className=" block flex flex-col text-zinc-700 capitalize ">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2">
            <p className="text-zinc-500">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              className="w-32 mt-5"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl gap-9 flex pb-5 ">
        {["Privacy Policy", "Cookie policy", "Terms & Conditions"].map(
          (item, index) => (
            <a className=" text-zinc-700">{item}</a>
          )
        )}
      </div>
    </div>
  );
}

export default Footer;
