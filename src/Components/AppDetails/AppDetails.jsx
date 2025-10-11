import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import ratingImg from "../../assets/icon-ratings.png";
import downloadImg from "../../assets/icon-downloads.png";
import review from "../../assets/review.png";
import { ToastContainer, toast } from "react-toastify";
import BarCharts from "../BarChart/BarChart";
import { addToLocalStorage } from "../utilities/localStore";
import Spinner from "../Spinner/Spinner";

const AppDetails = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("Install Now (291 MB)");
  const { id } = useParams();
  const datas = useLoaderData();
  const [found, setFound] = useState(true)

  
  const findedApp = datas.find((app) => app.id === parseInt(id));
  const {
    image,
    title,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    ratings,
  } = findedApp;

  
  if(!findedApp){
    setFound(false)
  }

  const handleOnCLick = (id) => {
    const installBtn = document.querySelector(".install-btn");
    installBtn.disabled = true;
    setStatus("Installed");
    toast(" App Installed");
    addToLocalStorage(id);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="mt-[40px] px-3 md:px-0 md:max-w-[1300px] md:mx-auto mb-[80px]">
          <div className="flex flex-col md:flex-row gap-10 border-b-2 border-gray-300 py-10">
            <div className="rounded-lg  w-[300px]">
              <img
                className="w-full h-full rounded-lg object-fit "
                src={image}
                alt=""
              />
            </div>
            <div>
              <div className="pb-3 mb-3 border-b-2 border-gray-300">
                <h1 className="text-[32px] font-bold">{title}</h1>
                <p>
                  Developed by{" "}
                  <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                    {companyName}
                  </span>
                </p>
              </div>
              <div className="flex gap-7 mb-9 mt-9 ">
                <div>
                  <img src={downloadImg} alt="" />
                  <p className="mt-2 mb-1">Downloads</p>
                  <h1 className="text-2xl font-bold">{downloads / 1000000}M</h1>
                </div>
                <div>
                  <img src={ratingImg} alt="" />
                  <p className="mt-2 mb-1">Average Ratings</p>
                  <h1 className="text-2xl font-bold">{ratingAvg}</h1>
                </div>
                <div>
                  <img src={review} alt="" />
                  <p className="mt-2 mb-1">Total Reviews</p>
                  <h1 className="text-2xl font-bold">{reviews / 100}K</h1>
                </div>
              </div>
             
              <button
                onClick={() => {
                  handleOnCLick(id);
                }}
                className={`bg-green-500 p-3 rounded-lg text-white cursor-pointer install-btn font-semibold ${
                  status === "Installed" ? "opacity-90" : ""
                }`}
              >
                {status}
              </button>
              <ToastContainer></ToastContainer>
            </div>
          </div>
          <div className="border-b-2 border-gray-300 py-5">
            <h1 className="text-xl font-semibold mb-3">Ratings</h1>
            <div>
              <BarCharts ratings={ratings}></BarCharts>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-xl font-semibold mb-3">Description</h1>
            <div className="text-[#627382]">{description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
