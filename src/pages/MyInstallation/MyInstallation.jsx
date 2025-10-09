import React, { useState } from 'react';
import InstalledAppsCard from '../../components/InstalledAppsCard/InstalledAppsCard';
import { getAppFromLS } from '../../utility/LocalStorage';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const MyInstallation = () => {
  const appsData = useLoaderData();

  const installedAppFromLS = getAppFromLS();

  const [filteredApps, setFilteredApps] = useState(installedAppFromLS);

  const filteredAppsData = appsData.filter(app => filteredApps.includes(app.id));

  const handleUninstall = (id) => {
    const updatedInstalledApps = filteredApps.filter(appId => appId !== id);
    setFilteredApps(updatedInstalledApps);
    const updatedInstalledAppsJson = JSON.stringify(updatedInstalledApps);
    localStorage.setItem('installed', updatedInstalledAppsJson);

    const uninstalledApp = appsData.find(app => app.id === id);
    toast.error(`${uninstalledApp.title} Uninstalled from your Device`);
  }

  return (
    <div className='max-w-[1440px] mx-auto py-20'>
      <h1 className='text-5xl font-bold text-center'>Your Installed Apps</h1>
      <p className='text-xl text-[#627382] mt-4 mb-10 text-center'>Explore All Trending Apps on the Market developed by us</p>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-2xl font-semibold'>{filteredAppsData.length} Apps Found</h3>
        {/* dropdown */}
        <select defaultValue="Pick a color" className="select">
          <option disabled={true}>Sort By Download</option>
          <option>High-Low</option>
          <option>Low-High</option>
        </select>
      </div>
      {
        filteredAppsData.map(app => <InstalledAppsCard
          key={app.id}
          app={app}
          handleUninstall={handleUninstall}>
        </InstalledAppsCard>)
      }
    </div>
  );
};

export default MyInstallation;