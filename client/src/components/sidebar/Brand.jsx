import React from "react";
import { BsFillHeartPulseFill } from "react-icons/bs"

const brand = () => {
  return (
    <div className="flex flex-row items-center justify-center h-12 w-full">
      <div className="flex items-center justify-center rounded-2xl  bg-white h-12 w-12 p-2 ">
        <BsFillHeartPulseFill className="text-indigo-500 text-3xl" />
      </div>
      <div className="ml-2 font-bold text-2xl">QDiagno</div>
    </div>
  );
};

export default brand;
