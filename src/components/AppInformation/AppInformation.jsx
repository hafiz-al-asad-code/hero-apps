import React, { useEffect, useState } from 'react';
import downloadImg from '../../assets/icon-downloads.png';
import ratingsImg from '../../assets/icon-ratings.png';
import reviewImg from '../../assets/icon-review.png';
import { addAppToLS, getAppFromLS } from '../../utility/LocalStorage';
import { toast } from 'react-toastify';

const AppInformation = ({ singleApp }) => {

  const [Disabled, setDisabled] = useState(false);

  const { id, image, title, companyName, downloads, ratingAvg, reviews, size } = singleApp;

  const handleLocalStorage = (id) => {
    addAppToLS(id);
    setDisabled(true);
    toast.success(`Yahoo !! ${title} Installed Successfully`);
  }

  useEffect(() => {
    const installedAppData = getAppFromLS();
    if (installedAppData.includes(id)) {
      setDisabled(true);
    }
  }, [id])

  return (
    <div className='flex gap-10 border-b border-[#00193133] pb-10 mt-20 mb-10'>
      {/* img div */}
      <div>
        <img className='w-[350px] h-full shadow-sm' src={image} alt="" />
      </div>
      {/* information div */}
      <div>
        <div className='border-b border-[#00193133] pb-[29.5px]'>
          <h1 className='text-[32px] font-bold'>{title}</h1>
          <p className='text-xl font-bold'>Developed by {companyName}</p>
        </div>

        <div className='flex gap-[100px] mt-[30.5px] my-2]'>
          <div>
            <img src={downloadImg} alt="" />
            <p className='text-[#001931CC] my-2'>Downloads</p>
            <h3 className='text-[40px] font-extrabold text-[#001931]'>{downloads}M</h3>
          </div>
          <div>
            <img src={ratingsImg} alt="" />
            <p className='text-[#001931CC] my-2'>Average Ratings</p>
            <h3 className='text-[40px] font-extrabold text-[#001931]'>{ratingAvg}</h3>
          </div>
          <div>
            <img src={reviewImg} alt="" />
            <p className='text-[#001931CC] my-2'>Total Reviews</p>
            <h3 className='text-[40px] font-extrabold text-[#001931]'>{reviews}K</h3>
          </div>
        </div>

        <button onClick={() => handleLocalStorage(id)} disabled={Disabled} className={`py-3.5 px-5 bg-[#00d390] text-xl font-semibold text-white rounded-sm mt-[30px] ${Disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>{Disabled ? "Installed" : `Install Now (${size}MB)`}</button>
      </div>
    </div>
  );
};

export default AppInformation;