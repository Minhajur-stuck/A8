import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center gap-3 mt-20 h-[280px]'>
        <h1 className='text-5xl text-orange-500 animate-pulse'>''App is not Found''</h1>
        <p className='text-gray-500'>The App you are looking for does not exist or has been removed</p>
        <button onClick={()=>{navigate(-1)}} className='btn btn-error mt-10'>Back to Home</button>
        
      </div>
    </div>
  );
};

export default NotFound;