import React from 'react';
import { Link } from 'react-router';
import appErrorImg from '../../assets/App-Error.png';

const AppNotFound = ({ setFilteredApps, appsData, setSearchedWords }) => {
  return (
    <div className='text-center py-[80px]'>
      <img className='mx-auto' src={appErrorImg} alt="" />
      <h1 className='text-5xl font-semibold mt-[44px] mb-4'>OPPS!! APP NOT FOUND</h1>
      <p className='text-xl text-[#627382] mb-4'>The App you are requesting is not found on our system.  please try another apps</p>
      <button onClick={() => { setFilteredApps(appsData), setSearchedWords("") }} className='text-white font-semibold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-[12px] px-[40.5px] rounded-sm'>Go Back</button>
    </div>
  );
};

export default AppNotFound;