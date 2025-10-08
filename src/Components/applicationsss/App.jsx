import React from "react";
import { useLoaderData } from "react-router";
import SingleApp from "../SingleApp/SingleApp";

const App = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="">
      <div className="text-center mt-[80px] mb-10">
        <h1 className="text-4xl font-bold mb-4">Our All Applications</h1>
        <p className="text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="w-[1300px] mx-auto flex items-center justify-between px-4 mb-[20px]">
        <h3 className="font-semibold text-2xl">({data.length}) Apps Founded</h3>

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
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="grid grid-cols-4 w-[1300px] mx-auto">
        {data.map((app) => (
          <SingleApp key={app.id} app={app}></SingleApp>
        ))}
      </div>
    </div>
  );
};

export default App;
