import React from "react";
import errorImg from "../../assets/error-404.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center mb-10">
        <div className="flex flex-col items-center justify-center">
          <img src={errorImg} alt="" />
          <h1 className="font-semibold text-4xl">OPPS!! APP NOT FOUND</h1>
          <p className="text-[20px] text-[#627382] mt-2 mb-5">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <button onClick={()=>{navigate(-1)}} className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white w-[200px]">
            
            Go Back
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
