import React from "react";
import  ratingImg from "../../assets/fi_1828884.png"
import downloadImg from "../../assets/fi_9131795.png"
import { Link } from "react-router";

const SingleApp = ({ app }) => {
  console.log(app);
  const {title,image, id,downloads, rating} = app
  return (
    <Link to={`/appDetails/${id}`}>
      <div className="shadow-lg w-[310px] h-[400px] mb-4 border p-3">
      <div>
        <div className="border rounded-lg flex justify-center">
        <img className="border" src="https://play-lh.googleusercontent.com/d2zqBFBEymSZKaVg_dRo1gh3hBFn7_Kl9rO74xkDmnJeLgDW0MoJD3cUx0QzZN6jdsg=s256-rw" alt="" />
      </div>
      <h1 className="font-semibold text-[18px] mb-3 mt-3">{title}</h1>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-1 bg-[#F1F5E8] p-2 rounded-lg">
          <img className="h-[20px]" src={downloadImg}  />
          <h3 className="text-[#00D390]">9M</h3>
        </div>
        <div className="flex items-center gap-1 bg-[#F1F5E8] p-2 rounded-lg">
          <img className="h-[20px]" src={ratingImg} />
          <h3 className="text-[#FF8811]">4.5</h3>
        </div>
      </div>
      </div>
    </div>
    </Link>
  );
};

export default SingleApp;
