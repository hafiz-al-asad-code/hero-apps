import React from 'react';
import appErrorImg from '../../assets/App-Error.png';
import { useNavigate } from 'react-router';

const DetailsPageAppNotFound = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div className='text-center py-[80px]'>
      <img className='mx-auto' src={appErrorImg} alt="" />
      <h1 className='text-5xl font-semibold mt-[44px] mb-4'>OPPS!! APP NOT FOUND</h1>
      <p className='text-xl text-[#627382] mb-4'>The App you are requesting is not found on our system.  please try another apps</p>
      <button onClick={handleBack} className='text-white font-semibold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-[12px] px-[40.5px] rounded-sm cursor-pointer'>Go Back</button>
    </div>
  );
};

export default DetailsPageAppNotFound;