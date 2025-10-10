import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import logoImg from '../../assets/logo.png';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='flex justify-between max-w-[1440px] mx-auto text-white py-10'>
        <div>
          <Link to="/"><figure><img className='w-[200px]' src={logoImg} alt="" /></figure></Link>
        </div>

        <div>
          <h3 className='text-[#747477] mb-5 font-semibold'>Legal</h3>
          <ul className='space-y-4'>
            <li><a href="">Terms of use</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Cookie Policy</a></li>
            <li><a href="">Security</a></li>
          </ul>
        </div>

        <div>
          <h3 className='text-[#747477] mb-5 font-semibold'>Company</h3>
          <ul className='space-y-4'>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Jobs</a></li>
          </ul>
        </div>

        <div>
          <h3 className='text-[#747477] mb-5 font-semibold'>Explore</h3>
          <ul className='space-y-4'>
            <li><a href="">Features</a></li>
            <li><a href="">Enterprice</a></li>
            <li><a href="">Latest Packages</a></li>
            <li><a href="">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h3 className='text-[#747477] mb-5 font-semibold'>Social</h3>
          <div className='flex gap-6 text-4xl'>
            <a href=""><FaFacebookF /></a>
            <a href=""><FaTwitter /></a>
            <a href=""><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className='py-2'>
        <p className='text-[#747477] text-center text-[14px]'>Copyright &copy; 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;