import React from "react";
import downloadImg from "../../assets/fi_9131795.png";
import ratingImg from "../../assets/fi_1828884.png";
import img from "../../assets/demo-app (2).webp";
import { addToLocalStorage, getAppFromLocal, removeFromStore } from "../utilities/localStore";

const InstalledApp = ({ app ,handleUninstall }) => {
  const {
    id,
    image,
    title,
    downloads,
    ratingAvg,
  } = app;
  console.log(app)

  
  return (
    <div className="mb-7 px-5 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col mb-3 md:mb-0 md:flex-row items-center">
        <img className="h-[100px] w-[100px] rounded-lg mr-5" src={image} alt="" />
        <div>
          <h1 className="md:text-xl font-semibold">{title}</h1>
          <div className="flex  md:flex-row  items-center gap-2">
            <div className="flex items-center gap-1 bg-[#F1F5E8] p-2 rounded-lg">
              <img className="h-[20px]" src={downloadImg} />
              <h3 className="text-[#00D390]">{downloads/1000000}M</h3>
            </div>
            <div className="flex items-center gap-1 bg-[#F1F5E8] p-2 rounded-lg">
              <img className="h-[20px]" src={ratingImg} />
              <h3 className="text-[#FF8811]">{ratingAvg}</h3>
            </div>
            <p className="text-[#627382]">258 MB</p>
          </div>
        </div>
      </div>
      <button onClick={()=> handleUninstall(id)} className="btn btn-accent text-white">Uninstall</button>
    </div>
  );
};

export default InstalledApp;
