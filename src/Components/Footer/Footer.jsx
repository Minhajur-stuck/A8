import React from "react";
import logo from "../../assets/logo.png";
import twitter from "../../assets/fi_5969020 (1).png";
import linkedIn from "../../assets/Frame 1171277689.png";
import fb from "../../assets/Frame 1171277690.png";
import gunimg from "../../assets/images (6).jpeg";

const Footer = () => {
  return (
    <div className="bg-[#000000]  flex items-center justify-center ">
      <div className="w-[1300px] mx-auto ">
        <div className="flex items-center justify-center gap-2 mb-5">
          <img
            className="h-[70px] mb-[-15px] rounded-b-[30px] "
            src={gunimg}
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-center font-semibold text-white text-3xl">A-Store</h1>
        </div>
        <div className="flex items-center justify-center gap-3 mt-1">
          <img className="border-2 bg-gray-400  p-2 rounded-2xl" src={twitter} alt="" />
          <img className="border-2 bg-gray-400  p-2 rounded-2xl" src={fb} alt="" />
          <img className="border-2 bg-gray-400  p-2 rounded-2xl" src={linkedIn} alt="" />
        </div>
        <div className="text-center m-2 font-semibold text-[#969393]">
          <p>Copyright © 2025 - All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
