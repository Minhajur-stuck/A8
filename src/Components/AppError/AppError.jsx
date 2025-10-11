import React from "react";
import appErrImg from "../../assets/App-Error.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router";

const AppError = () => {
  return (
    <div className="flex justify-center m-5 mb-20">
      <div className="flex flex-col items-center h-[300px] justify-center">
        <h1 className="font-semibold text-4xl mb-3">OPPS!! APP NOT FOUND</h1>
       
        <Link to='/app'><button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white w-[200px]"> Go Back</button></Link> 
      </div>
    </div>
  );
};

export default AppError;
