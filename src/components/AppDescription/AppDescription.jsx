import React from 'react';

const AppDescription = ({ singleApp }) => {
  const { description } = singleApp;

  return (
    <div className='mb-20 border-t border-[#00193133] pt-10'>
      <h2 className='text-2xl font-semibold mb-6'>Description</h2>
      <p className='text-xl text-[#627382]'>{description}</p>
    </div>
  );
};

export default AppDescription;