import React, { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import SingleApp from "../SingleApp/SingleApp";
import AppError from "../AppError/AppError";
import useLoading from "../hook/useLoading";
import { FadeLoader } from "react-spinners";
import Spinner from "../Spinner/Spinner";

const App = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const [loadData, setLoadData] = useState(data);
  const [search, setSearch] = useState("");
  const [loadingAni, setLoading] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const term = search.trim().toLocaleLowerCase();
  const filteredData = data.filter((app) =>
    app.title.toLowerCase().includes(term)
  );


  // console.log(loadData);

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    const trimed = inputValue.trim().toLowerCase();
    const filteredData = data.filter((app) =>
      app.title.toLocaleLowerCase().includes(trimed)
    );

    console.log(filteredData);
    if (filteredData) {
      setLoading(true);
      setLoadData(filteredData);
    }
  };
  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setSpinner(false);
    }, 2000);
  });

  return (
    <div>
      {spinner ? (
        <Spinner></Spinner>
      ) : (
        <div className="">
          <div className="text-center mt-[80px] mb-10">
            <h1 className="text-4xl font-bold mb-4">Our All Applications</h1>
            <p className="text-gray-400">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div className="md:w-[1300px] mx-auto flex flex-col md:flex-row md:items-center justify-between px-4 mb-[20px]">
            <h3 className="font-semibold mb-3 md:mb-0 text-2xl">
              ({loadData.length}) Apps Founded
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
                onChange={handleOnChange}
              />
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 pl-6 md:pl-0 md:grid-cols-4 md:w-[1300px] md:mx-auto">
            {loadingAni ? (
              <Spinner></Spinner>
            ) : loadData.length === 0 ? (
              navigate("/appErr")
            ) : (
              loadData.map((app) => (
                <SingleApp key={app.id} app={app}></SingleApp>
              ))
            )}
          </div>
         

          
        </div>
      )}
    </div>
  );
};

export default App;
