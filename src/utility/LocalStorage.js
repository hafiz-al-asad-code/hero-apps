const getAppFromLS = () => {
  const savedInstalledApp = localStorage.getItem('installed');
  if (savedInstalledApp) {
    const convertSavedInstalledApp = JSON.parse(savedInstalledApp);
    return convertSavedInstalledApp;
  }
  else {
    return [];
  }
}

const addAppToLS = (id) => {
  const installedAppData = getAppFromLS();
  if (installedAppData.includes(id)) {
    return;
  }
  else {
    installedAppData.push(id);
    const installedAppDataJson = JSON.stringify(installedAppData);
    localStorage.setItem('installed', installedAppDataJson);
  }
}

export { getAppFromLS, addAppToLS }