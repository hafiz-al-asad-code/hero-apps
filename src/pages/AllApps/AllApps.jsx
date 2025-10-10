import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../components/AppCard/AppCard';
import searchImg from '../../assets/search.png';
import SearchedAppNotFound from '../../components/SearchedAppNotFound/SearchedAppNotFound';
import logoImg from '../../assets/logo.png';

const AllApps = () => {
  const appsData = useLoaderData();

  const [filteredApps, setFilteredApps] = useState(appsData);
  const [isSearching, setIsSearching] = useState(false);
  const [searchedWords, setSearchedWords] = useState("");

  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase().trim();
    setSearchedWords(inputValue);
    setIsSearching(true);

    setTimeout(() => {
      const searchedApps = appsData.filter(app => app.title.toLowerCase().includes(inputValue));

      setFilteredApps(searchedApps);
      setIsSearching(false);
    }, 300)
  }

  return (
    <div>
      <div className={"max-w-[1440px] mx-auto my-20"}>
        <h1 className='text-5xl font-bold text-center'>Our All Applications</h1>
        <p className='text-xl mt-4 mb-10 text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
        <div className='flex justify-between mb-4'>
          <h3 className='text-2xl font-semibold'>({filteredApps.length}) Apps Found</h3>
          <label htmlFor="" className='relative'>
            <input value={searchedWords} onChange={handleSearch} type="search" name="" id="" className='border border-[#d2d2d2] py-3 pl-[46px] w-[400px] rounded-sm' placeholder='search Apps' />
            <img className='absolute top-[16px] left-[16px]' src={searchImg} alt="" />
          </label>
        </div>
      </div>

      {isSearching ?
        <div className='text-5xl font-bold opacity-50 text-center h-[200px]'>L<img className='animate-spin w-[80px] inline-block mx-5' src={logoImg} alt="" />ading</div>
        :
        filteredApps.length ?
          <div className='grid grid-cols-4 gap-4 max-w-[1440px] mx-auto mb-20'>
            {
              filteredApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
            }
          </div>
          :
          <SearchedAppNotFound setFilteredApps={setFilteredApps} appsData={appsData} setSearchedWords={setSearchedWords}></SearchedAppNotFound>
      }
    </div>
  );
};

export default AllApps;