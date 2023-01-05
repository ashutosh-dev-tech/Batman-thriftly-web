
import Link from 'next/link';
import React from 'react';

interface IntroHeaderProps {
  teamRef?: any;
  pricingRef?: any;
  featuresRef?: any;
  processRef?: any;
  contactUsRef?: any;
}
function IntroHeader({teamRef, pricingRef, featuresRef, processRef, contactUsRef}: IntroHeaderProps) {
  return (
      <header className='p-[0.5vw] flex border-b-[0.2vw] flex-1 justify-between items-center sticky top-0 z-50 bg-white'>
        <div>
          <div>
            <img src="https://thriftly.s3.ap-south-1.amazonaws.com/Logo.svg" className='w-[7vw]' />
          </div>
        </div>
        <div className='flex items-center font-normal'>
          <div className=' !text-[1.3vw] mx-[1vw] p-[1vw] cursor-pointer' onClick={()=>{ 
              featuresRef.current?.scrollIntoView({behavior: 'smooth'});
            }}>
            <p>Features</p>
          </div>
          <div className=' text-[1.3vw] mx-[1vw] p-[1vw] cursor-pointer' onClick={()=>{ processRef.current?.scrollIntoView({behavior: 'smooth'});}}>
            <p>About</p>
          </div>
          <div className=' text-[1.3vw] mx-[1vw] p-[1vw] cursor-pointer' onClick={()=>{ pricingRef.current?.scrollIntoView({behavior: 'smooth'});}}>
            <p>Pricing</p>
          </div>
          <div className='text-[1.3vw] mx-[1vw] p-[1vw] cursor-pointer' onClick={()=>{ teamRef.current?.scrollIntoView({behavior: 'smooth'});}}>
            <p>Team</p>
          </div>
        </div>

        <div className='flex items-center'>
          <Link href="/login" className='!text-[1.3vw] mx-[1vw] p-[1vw]'>
            <p>Sign In</p>
          </Link>
          <div className='!text-[1.3vw] mx-[1vw] p-[1vw] cursor-pointer' onClick={()=>{  
              console.log({contactUsRef});
              contactUsRef?.current?.scrollIntoView({behavior: 'smooth'});
            }}>
            <p>Have Invite?</p>
          </div>
        </div>      
      </header>    
  );
}

export default IntroHeader;