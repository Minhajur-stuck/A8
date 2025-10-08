import React from "react";
import googleImg from "../../assets/fi_16076057.png"
import appStoreImg from "../../assets/fi_5977575.png"
import BannerImage from "../../assets/hero.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="mt-[80px]">
      <div>
        <h1 className="font-bold text-[72px] text-center  mb-[20px]">
          We Build <br /> <span>Productive</span> Apps
        </h1>
        <p className="text-center px-50 text-[#627382] text-[20px] mb-[40px]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>
      <div className=" flex items-center justify-between w-[300px] mx-auto mb-[40px]">
        <Link to="https://play.google.com/store/games?hl=en"><button className="flex border border-gray-300 p-2  items-center gap-2 font-semibold cursor-pointer">
          <img  src={googleImg} alt="" />
          <h3>Google Play</h3>
        </button>
        </Link>
        <Link to="https://www.apple.com/app-store/"><button className="flex border-gray-300 items-center gap-2 font-semibold border btn-ghost p-2 cursor-pointer">
          <img className="h-[30px]" src={appStoreImg} alt="" />
          <h3>App Store</h3>
        </button>
        </Link>
      </div>
      <div className="flex justify-center">
         <img src={BannerImage} alt="" />
      </div>
      <div className="w-full h-[300px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] flex justify-center text-white items-center">
        <div className="w-[900px]  text-center">
          <h1 className="text-4xl font-bold">Trusted By Millions, Built For You</h1>
        <div className="flex items-center justify-center gap-30 mt-[40px]">
          <div >
            <p>Total Downloads</p>
            <h1 className="text-6xl font-bold mt-2 mb-2">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div >
            <p>Total Reviews</p>
            <h1 className="text-6xl font-bold mt-2 mb-2">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div >
            <p>Active Apps</p>
            <h1 className="text-6xl font-bold mt-2 mb-2">132+</h1>
            <p>31 more will Launch</p>
          </div>
          
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
