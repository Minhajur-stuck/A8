import React from "react";
import gunImg from "../../assets/istockphoto-451842949-612x612.jpg"

const Spinner = () => {
  return (
    <div className="m-[82px] col-span-4" >
      <div>
        <div className=" h-[full]">
          <div className=" flex flex-col items-center justify-center gap-10">
            <img className="h-[150px] animate-pulse" src={gunImg} alt="" />
            <span className="text-3xl md:text-4xl font-bold animate-bounce opacity-50">
              L O A D I N G
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
