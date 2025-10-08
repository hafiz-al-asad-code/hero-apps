import React from 'react';
import { Bar, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppReviewChart = ({ singleApp }) => {
  const { ratings } = singleApp;

  return (
    <div className='h-[360px] mb-[45px]'>
      <h3 className='text-2xl font-semibold mb-6'>Ratings</h3>
      <ResponsiveContainer width="100%" height="90%">
        <ComposedChart layout='vertical' data={ratings}>
          <XAxis type='number' axisLine={false} tickLine={false}></XAxis>
          <YAxis type='category' dataKey="name" reversed axisLine={false} tickLine={false} dx={-16}></YAxis>
          <Bar dataKey="count" barSize={32} fill='#ff8811'></Bar>
          <Tooltip></Tooltip>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppReviewChart;