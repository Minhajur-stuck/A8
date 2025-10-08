import React from "react";
import logo from "../../assets/logo.png";
import twitter from "../../assets/fi_5969020 (1).png"
import linkedIn from "../../assets/Frame 1171277689.png"
import fb from "../../assets/Frame 1171277690.png"

const Footer = () => {
  return (
    <div className="bg-[#001931] h-[180px] text-white flex items-center justify-center">
      <div className="w-[1300px] mx-auto ">
        <div className="flex items-center justify-between mb-5 border-b-1 border-gray-500 pb-5">
          <div className="flex items-center ">
            <img className="h-[40px] " src={logo} alt="" />
            <h1 className="text-xl">H E R O</h1>
          </div>
          <div>
            <h1>Social sites</h1>
            <div className="flex items-center gap-2">
              <img src={twitter}alt="" />
              <img src={linkedIn}alt="" />
              <img src={fb} alt="" />
            </div>
          </div>
        </div>
        <div className="text-center text-[#cac8c8]">
          <p>Copyright © 2025 - All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
