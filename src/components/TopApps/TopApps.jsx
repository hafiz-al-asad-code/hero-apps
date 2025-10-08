import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../AppCard/AppCard';

const TopApps = () => {
  const appsData = useLoaderData();
  const apps = appsData.slice(0, 8);

  return (
    <div className='max-w-[1440px] mx-auto mb-20'>
      <h1 className='text-5xl font-bold mb-4 text-center'>Trending Apps</h1>
      <p className='text-xl text-[#627382] mb-10 text-center'>Explore All Trending Apps on the Market developed by us</p>
      <div className='grid grid-cols-4 gap-4'>
        {
          apps.map(app => <AppCard key={app.id} app={app}></AppCard>)
        }
      </div>
      <Link to="/allApps" className='flex justify-center'>
        <button className='py-[14.5px] px-[39px] bg-gradient-to-r from-[#632ee3] to-[#9f62f2] rounded-[4px] text-white font-semibold mt-10 cursor-pointer'>Show All</button>
      </Link>
    </div>
  );
};

export default TopApps;