import React from 'react';

const States = () => {
  return (
    <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white py-20 mb-20'>
      <h2 className='text-5xl font-bold text-center mb-10'>Trusted by Millions, Built for You</h2>

      <div className='flex justify-center items-center gap-[150px] text-center'>
        {/* first */}
        <div className='space-y-4'>
          <p>Total Downloads</p>
          <h1 className='text-[64px] font-extrabold'>29.6M</h1>
          <p>21% more than last month</p>
        </div>
        {/* middle */}
        <div className='space-y-4'>
          <p>Total Reviews</p>
          <h1 className='text-[64px] font-extrabold'>906K</h1>
          <p>46% more than last month</p>
        </div>
        {/* last */}
        <div className='space-y-4'>
          <p>Active Apps</p>
          <h1 className='text-[64px] font-extrabold'>132+</h1>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default States;