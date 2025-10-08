import { Download, Star } from 'lucide-react';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const AppCard = ({ app }) => {
  console.log(app);
  const { image, title, downloads, ratingAvg } = app;

  return (
    <div className='p-4 bg-white rounded-[4px] shadow-lg'>
      <div>
        <img className='w-full h-[285px]' src={image} alt="" />
      </div>
      <h4 className='text-xl font-medium my-4'>{title}</h4>
      <div className='flex justify-between items-center'>
        <p className='font-medium flex items-center gap-2 py-1.5 px-2.5 rounded-[4px] bg-[#f1f5e8] text-[#00d390]'><span><Download className='w-4 h-4' /></span> <span>{downloads}</span></p>

        <p className='font-medium flex items-center gap-2 py-1.5 px-2.5 rounded-[4px] bg-[#fff0e1] text-[#ff8811]'><span><FaStar className='w-4 h-4' /></span> <span>{ratingAvg}</span></p>
      </div>
    </div>
  );
};

export default AppCard;