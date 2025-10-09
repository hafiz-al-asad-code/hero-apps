import React from 'react';
import downloadImg from '../../assets/icon-downloads.png';
import ratingsImg from '../../assets/icon-ratings.png';

const InstalledAppsCard = ({ app, handleUninstall }) => {
  // console.log(app);
  const { id, image, title, downloads, ratingAvg, size } = app;

  return (
    <div className='flex justify-between items-center p-4 bg-white rounded-sm mb-4'>
      {/* left div */}
      <div className='flex items-center gap-4'>
        <div>
          <img className='w-[80px] rounded-lg' src={image} alt="" />
        </div>

        <div>
          <h4 className='text-xl font-medium mb-4'>{title}</h4>
          <div className='flex gap-4'>
            <div className='flex items-center gap-1'>
              <img className='w-[16px] h-[16px]' src={downloadImg} alt="" />
              <p className='font-medium'>{downloads}M</p>
            </div>
            <div className='flex items-center gap-1'>
              <img className='w-[16px] h-[16px]' src={ratingsImg} alt="" />
              <p className='font-medium'>{ratingAvg}</p>
            </div>
            <p className='text-[#627382]'>{size} MB</p>
          </div>
        </div>
      </div>
      {/* right div */}
      <div>
        <button onClick={() => handleUninstall(id)} className='text-white font-semibold py-3 px-4 bg-[#00d390] rounded-sm'>Uninstall</button>
      </div>
    </div>
  );
};

export default InstalledAppsCard;