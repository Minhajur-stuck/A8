import React, { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import SingleApp from "../SingleApp/SingleApp";
import AppError from "../AppError/AppError";

const App = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  // const [loadData, setLoadData] = useState([]);
  const [search, setSearch] = useState("");

  const term = search.trim().toLocaleLowerCase();
  const filteredData = data.filter(app => (app.title).toLowerCase().includes(term))

  // useEffect(()=>{
  //   if(term === ''){
  //      setLoadData(data)
  //   return
  //   }

  // if(filteredData.length> 0){
  //     setLoadData(filteredData)
  //   }else{
  //    navigate('/appErr')
  //   }

  // },[])

  // if(term === ''){
  //   setLoadData(data)
  //   return
  // }
  // else if(term!==''){
  //    
  //    if(filteredData.length > 0){
  //     setLoadData(filteredData)
  //    } else {
  //     navigate('/appErr')
  //    }
  // }

  // const searchedProduct = term? data.filter(app => (app.title).toLowerCase().includes(term) ) : data

  // console.log(loadData);

  // const handleOnChange=(e)=>{
  //   const inputValue= e.target.value;
  //   const trimed = inputValue.trim().toLowerCase()
  //   return trimed

  // }
  // const searchData = handleOnChange ? data.filter(app => (app.title).toLowerCase().includes(handleOnChange) ) : data
  // console.log(handleOnChange)

  return (
    <div className="">
      <div className="text-center mt-[80px] mb-10">
        <h1 className="text-4xl font-bold mb-4">Our All Applications</h1>
        <p className="text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="w-[1300px] mx-auto flex items-center justify-between px-4 mb-[20px]">
        <h3 className="font-semibold text-2xl">
          ({filteredData.length}) Apps Founded
        </h3>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <div className="grid grid-cols-4 w-[1300px] mx-auto">
        {filteredData.length === 0
          ? navigate("/appErr")
          : filteredData.map((app) => (
              <SingleApp key={app.id} app={app}></SingleApp>
            ))}
      </div>
    </div>
  );
};

export default App;
