import React, { useState } from "react";
import './Nav.css'
import gitImage from "../../assets/icons8-github-48.png"
import logo from "../../assets/logo.png"
import { Link, Navigate, NavLink } from "react-router";
import gunimg from "../../assets/images (6).jpeg";

const Navbar = () => {

  const links = 
  <>
    <NavLink to="/"><li className="text-gray-400  font-semibold m-2">Home</li></NavLink>
    <NavLink to="/app"><li  className="text-gray-400  font-semibold m-2">App</li></NavLink>
    <NavLink to="/installation"><li className="text-gray-400 font-semibold m-2">Installation</li></NavLink>
  </>
  return (
    <div className="  px-2 py-5  navbar  shadow-sm bg-black text-white md:px-6">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        
          <NavLink to="/"><div className="flex items-center "><img className="hidden md:flex  h-[70px]  rounded-b-[30px] mt-[-10px]" src={gunimg} alt="" />
<h1 className="text-2xl md:text-3xl md:mt-[-15px] ml-2 font-semibold">A-Store</h1>
            </div></NavLink>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu  menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end ">
       <Link to="https://github.com/Minhajur-stuck"><button className="btn border-0 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"><img className="h-[30px]" src={gitImage} alt="" /> Contribute</button></Link> 
      </div>
    </div>
  );
};

export default Navbar;
