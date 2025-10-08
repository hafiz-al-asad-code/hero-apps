import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppInformation from '../../components/AppInformation/AppInformation';

const AppDetails = () => {
  const appsData = useLoaderData();

  const { id } = useParams();

  return (
    <div>
      <AppInformation appsData={appsData} id={id}></AppInformation>
    </div>
  );
};

export default AppDetails;