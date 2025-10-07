import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import logoImg from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='flex justify-between max-w-[1440px] mx-auto text-white py-10'>
        <div>
          <figure><img className='w-[200px]' src={logoImg} alt="" /></figure>
        </div>

        <div>
          <h3 className='text-[#747477] mb-5 font-semibold'>Legal</h3>
          <ul className='space-y-4'>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Security</li>
          </ul>
        </div>

        <div>
          <h3 className='text-[#747477] mb-5 font-semibold'>Company</h3>
          <ul className='space-y-4'>
            <li>About Us</li>
            <li>Contact</li>
            <li>Jobs</li>
          </ul>
        </div>

        <div>
          <h3 className='text-[#747477] mb-5 font-semibold'>Explore</h3>
          <ul className='space-y-4'>
            <li>Features</li>
            <li>Enterprice</li>
            <li>Latest Packages</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className='text-[#747477] mb-5 font-semibold'>Social</h3>
          <div className='flex gap-6 text-4xl'>
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
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