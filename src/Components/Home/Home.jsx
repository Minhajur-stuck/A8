import React from "react";
import Banner from "../Banner/Banner";
import { Link, useLoaderData } from "react-router";
import SingleApp from "../SingleApp/SingleApp";
import Footer from "../Footer/Footer";

const Home = () => {
  const appData = useLoaderData();
  // console.log(appData)
  return (
    <div>
      <Banner></Banner>

      <div className="mt-[80px] mb-[80px]">
        <div className="text-center mb-[40px]">
          <h1 className="text-4xl font-bold mb-6">Trending Apps</h1>
          <p className="text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="grid grid-cols-4 w-[1300px] mx-auto">
          {
            appData.map(app => <SingleApp key={app.id} app={app}></SingleApp>)
          }
        </div>
        <div className="text-center mt-10">
          <Link to='/app'><button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white w-[200px]"> S h o w A l l</button></Link> 
        </div>
      </div>
      
    </div>
  );
};

export default Home;
