import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import  ratingImg from "../../assets/icon-ratings.png"
import downloadImg from "../../assets/icon-downloads.png"
import review from "../../assets/review.png"
import appPhoto from "../../assets/demo-app (4).webp"

const AppDetails = () => {
  const {id} = useParams();
  const data = useLoaderData();

  const findedApp = data.find(app => app.id === parseInt(id))
  const {image, title, companyName,description,downloads,ratingAvg,reviews} = findedApp
  console.log(findedApp)
  return (
    <div className='mt-[80px] max-w-[1300px] mx-auto'>
      <div className='flex gap-10'>
        <img src={appPhoto} alt="" />
        <div>
          <div className='pb-3 mb-3 border-b-2 border-gray-300'>
            <h1 className='text-[32px] font-bold'>sm plan: Todo list with reminder</h1>
          <p>Developed by </p>
          </div>
          <div className='flex gap-5'>
            <div>
              <img src={downloadImg} alt="" />
              <p>Downloads</p>
              <h1>8M</h1>
            </div>
            <div>
              <img src={ratingImg} alt="" />
              <p>Downloads</p>
              <h1>8M</h1>
            </div>
            <div>
              <img src={review} alt="" />
              <p>Downloads</p>
              <h1>8M</h1>
            </div>
          </div>
          <button className='btn btn-success text-white'>
            Install Now (291 MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;