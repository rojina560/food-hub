import React from "react";
import "./parallex.css";

const Parallex = () => {
  return (
    <div className="parallex h-[300px] relative flex items-center justify-center px-4">
      <div className="bg-pink-600 w-full max-w-[90%] md:max-w-[60%] lg:max-w-[40%] mx-auto p-6 rounded-lg text-center text-white">
        <h1 className="text-2xl font-bold">Food Hub</h1>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          molestias earum? Esse, architecto animi? Voluptate inventore
          reiciendis dolorem velit a.
        </p>
      </div>
    </div>
  );
};

export default Parallex;
