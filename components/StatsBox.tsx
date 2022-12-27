import React from 'react';

interface StatsBoxProps {
  heading: string;
  data?: string;
}
function StatsBox({heading, data}: StatsBoxProps) {
  return (
    <div className='w-[26vw] h-[12vw] bg-white p-[2vw] m-[1vw] rounded border-[0.5px] border-solid border-[#E5E4E2] shadow-2xl shadow-[#5566991c]'>
      {heading}
      <div className='flex content-center justify-center text-[32px] leading-[46px] font-bold h-[100%] bg-white'>
        <div className='mt-[2vw] bg-white'> {data} </div>
      </div>
    </div>
  );
}

export default StatsBox;