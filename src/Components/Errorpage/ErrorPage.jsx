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
        <div className="flex flex-col items-center justify-center h-[350px]">
          
          <h1 className="font-semibold text-[72px] animate-bounce  m-10 ">4 <span className="text-orange-400 ">0</span> 4</h1>
          
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
