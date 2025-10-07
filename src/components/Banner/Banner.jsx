import React from 'react';
import { GrAppleAppStore } from 'react-icons/gr';
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from 'react-icons/io5';
import bannerImg from '../../assets/hero.png';
import googlePlayImg from '../../assets/googlePlay.png';
import appStoreImg from '../../assets/appStore.png';

const Banner = () => {
  return (
    <div className='max-w-[1440px] mx-auto text-center'>
      <h1 className='text-[72px] font-semibold leading-[84px] mt-[80px]'>We Build<br /> <span className='font-black bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
      <p className='text-[#b3bbc1] text-xl mt-4 mb-10'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='flex justify-center items-center gap-4 mb-10'>
        <a href="https://play.google.com/store/games?hl=en" target='_blank'>
          <button className='py-3 px-6 flex items-center gap-2.5 rounded-[4px] border border-[#d2d2d2] cursor-pointer'>
            <img className='inline-flex' src={googlePlayImg} alt="" />
            <p className='text-xl font-semibold'>Google Play</p>
          </button>
        </a>
        <a href="https://www.apple.com/app-store/" target='_blank'>
          <button className='py-3 px-6 flex items-center gap-2.5 rounded-[4px] border border-[#d2d2d2] cursor-pointer'>
            <img src={appStoreImg} alt="" />
            <p className='text-xl font-semibold'>App Store</p>
          </button>
        </a>
      </div>
      <figure><img className='mx-auto' src={bannerImg} alt="" /></figure>
    </div>
  );
};

export default Banner;