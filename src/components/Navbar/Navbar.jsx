import React from 'react';
import logoImg from '../../assets/logo.png';
import githubImg from '../../assets/fi_2111432.png';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='bg-white py-4 border-b border-[#e9e9e9]'>
      <div className='flex justify-between items-center max-w-[1440px] mx-auto'>
        <Link to="/" className='flex items-center gap-1'>
          <figure>
            <img className='w-[40px] h-[40px]' src={logoImg} alt="" />
          </figure>
          <h3 className='font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent'>HERO.IO</h3>
        </Link>

        <div>
          <ul className='flex gap-8 font-medium nav-bar-links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/allApps">Apps</NavLink>
            <NavLink to="/myInstallation">Installation</NavLink>
          </ul>
        </div>

        <a href='https://github.com/hafiz-al-asad-code' target='_blank' className='py-3 px-4 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] rounded-[4px] flex items-center gap-2.5'>
          <figure>
            <img src={githubImg} alt="" />
          </figure>
          <h3 className='font-semibold text-white'>Contribute</h3>
        </a>
      </div>
    </div >
  );
};

export default Navbar;