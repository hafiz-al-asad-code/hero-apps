import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppInformation from '../../components/AppInformation/AppInformation';
import AppReviewChart from '../../components/AppReviewChart/AppReviewChart';
import AppDescription from '../../components/AppDescription/AppDescription';

const AppDetails = () => {
  const appsData = useLoaderData();

  const { id } = useParams();

  const singleApp = appsData.find(app => app.id === Number(id));

  return (
    <div className='max-w-[1440px] mx-auto'>
      <AppInformation singleApp={singleApp}></AppInformation>
      <AppReviewChart singleApp={singleApp}></AppReviewChart>
      <AppDescription singleApp={singleApp}></AppDescription>
    </div>
  );
};

export default AppDetails;