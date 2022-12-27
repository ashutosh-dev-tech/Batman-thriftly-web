
import Link from 'next/link';
import React from 'react';

function IntroHeader() {
  return (
      <header className='p-[0.5vw] flex border-b-[0.2vw] flex-1 justify-between items-center sticky top-0 z-50 bg-white'>
        <div>
          <Link href="/">
            <img src="https://thriftly.s3.ap-south-1.amazonaws.com/Logo.svg" className='w-[7vw]' />
          </Link>
        </div>
        <div className='flex items-center font-normal'>
          <Link href="/" className=' !text-[1.3vw] mx-[1vw] p-[1vw]'>
            <p>Features</p>
          </Link>
          <Link href="/gcp" className=' text-[1.3vw] mx-[1vw] p-[1vw]'>
            <p>About</p>
          </Link>
          <Link href="/account" className=' text-[1.3vw] mx-[1vw] p-[1vw]'>
            <p>Pricing</p>
          </Link>
          <Link href="/" className='text-[1.3vw] mx-[1vw] p-[1vw]'>
            <p>Team</p>
          </Link>
        </div>

        <div className='flex items-center'>
          <Link href="/" className='!text-[1.3vw] mx-[1vw] p-[1vw]'>
            <p>Sign In</p>
          </Link>
          <Link href="/" className='!text-[1.3vw] mx-[1vw] p-[1vw]'>
            <p>Have Invite?</p>
          </Link>
        </div>      
      </header>    
  );
}

export default IntroHeader;