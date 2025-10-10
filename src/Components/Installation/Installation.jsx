import React, { useEffect, useState } from "react";
import {
  addToLocalStorage,
  getAppFromLocal,
  removeFromStore,
} from "../utilities/localStore";
import { useLoaderData } from "react-router";
import sortImg from "../../assets/sort.png";
import InstalledApp from "../installedApp/InstalledApp";
import useLoading from "../hook/useLoading";
import { FadeLoader } from "react-spinners";
import Spinner from "../Spinner/Spinner";

const Installation = () => {
  const [loading, setLoading] = useState(true)
  const savedData = getAppFromLocal();
  const allAppData = useLoaderData();
  const [installed, setInstalled] = useState([]);

  const convertedId = savedData.map((id) => parseInt(id));

  useEffect(() => {
    const installedList = allAppData.filter((app) =>
      convertedId.includes(app.id)
    );
    setInstalled(installedList);
  }, []);
  console.log(installed);

  const handleUninstall = (id) => {
    removeFromStore(id);
    const updated = installed.filter((app) => app.id !== id);
    setInstalled(updated);
  };

  const handleSort = (type) => {
    if (type === "highToLow") {
      const bigToSmall = [...installed].sort(
        (a, b) => b.downloads - a.downloads
      );
      setInstalled(bigToSmall);
    }

    if (type === "lowToHigh") {
      const smallToBig = [...installed].sort(
        (a, b) => a.downloads - b.downloads
      );
      setInstalled(smallToBig);
    }
  };

  useEffect(()=>{
     setTimeout(() => {
       setLoading(false)
     }, 2000);
    })


  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center my-[40px]">
            <h1 className="font-bold text-4xl">Your Installed Apps</h1>
            <p className="text-[#627382] text-[20px] mt-4">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="flex items-center justify-between my-2">
            <div className="font-semibold text-2xl">
              {installed.length} apps Found
            </div>
            <details className="dropdown">
              <summary className="btn m-1">
                Sort By Download <img src={sortImg} alt="" />
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-[135px] p-2 shadow-sm">
                <li>
                  <a
                    onClick={() => {
                      handleSort("highToLow");
                    }}
                  >
                    High-Low
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleSort("lowToHigh");
                    }}
                  >
                    Low-High
                  </a>
                </li>
              </ul>
            </details>
          </div>
          <div>
            {installed.map((app) => (
              <InstalledApp
                handleUninstall={handleUninstall}
                key={app.id}
                app={app}
              ></InstalledApp>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Installation;
