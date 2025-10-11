import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarCharts = ({ratings}) => {
  // console.log(ratings)
  const data = ratings
  // console.log(data)

  return (
    <div className='w-full h-[500px] md:w-[1300px] md:h-[300px]'>
      <ResponsiveContainer width="90%"  height="100%">
        <BarChart
          width={500}
          height={300}
          layout='vertical'
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barSize={30}
        >
           <XAxis type="number" dataKey="count" axisLine={false} tickLine={false}/>
           <YAxis type="category" dataKey="name" axisLine={false} tickLine={false}/>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="count" fill="#FF8811" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;