import React from 'react';
import error404Img from '../../assets/error-404.png';
import { useNavigate } from 'react-router';

const ErrorPage = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div className='text-center py-[80px]'>
      <img className='mx-auto' src={error404Img} alt="" />
      <h1 className='text-5xl font-semibold mt-[44px] mb-4'>Oops, page not found!</h1>
      <p className='text-xl text-[#627382] mb-4'>The page you are looking for is not available.</p>
      <button onClick={handleGoBack} className='text-white font-semibold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-[12px] px-[40.5px] rounded-sm cursor-pointer'>Go Back</button>
    </div>
  );
};

export default ErrorPage;