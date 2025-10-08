import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../components/AppCard/AppCard';
import { Search } from 'lucide-react';
import { CiSearch } from 'react-icons/ci';
import searchImg from '../../assets/search.png';

const AllApps = () => {
  const appsData = useLoaderData();

  return (
    <div className='max-w-[1440px] mx-auto my-20'>
      <h1 className='text-5xl font-bold text-center'>Our All Applications</h1>
      <p className='text-xl mt-4 mb-10 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className='flex justify-between mb-4'>
        <h3 className='text-2xl font-semibold'>({appsData.length}) Apps Found</h3>
        <label htmlFor="" className='relative'>
          <input type="search" name="" id="" className='border border-[#d2d2d2] py-3 pl-[46px] w-[400px] rounded-sm' placeholder='search Apps' />
          <img className='absolute top-[16px] left-[16px]' src={searchImg} alt="" />
        </label>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {
          appsData.map(app => <AppCard key={app.id} app={app}></AppCard>)
        }
      </div>
    </div>
  );
};

export default AllApps;