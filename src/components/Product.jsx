import React from "react";
import Button from "./Button";

function Product({ item }) {
  return (
    <div className="w-full py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl font-medium capitalize">{item.title}</h1>
        <div className="w-1/3 ">
          <p className="mb-10">{item.description}</p>
          <div className="flex items-center gap-5">
            {item.live && <Button title="Live website" />}
            {item.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
