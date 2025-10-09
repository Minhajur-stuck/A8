import React from "react";
import appErrImg from "../../assets/App-Error.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router";

const AppError = () => {
  return (
    <div className="flex justify-center m-5 mb-20">
      <div className="flex flex-col items-center justify-center">
        <img src={appErrImg} alt="" />
        <h1 className="font-semibold text-4xl">OPPS!! APP NOT FOUND</h1>
        <p className="text-[20px] text-[#627382] mt-2 mb-5">The App you are requesting is not found on our system.  please try another apps</p>
        <Link to='/app'><button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white w-[200px]"> Go Back</button></Link> 
      </div>
    </div>
  );
};

export default AppError;
