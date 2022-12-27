import Link from 'next/link';
import React from 'react';
import { Button, Popover } from 'antd';
import { logout } from '../utils';

const popoverContent = (
  <Button type='primary' className='bg-[#ff5f5c]' onClick={logout}>
    Logout
  </Button>
)

function Header() {
  return (
    <header className='p-[0.5vw] flex border-b-[0.2vw] flex-1 justify-between items-center sticky top-0 z-50 bg-white'>
      <div>
        <Link href="/">
          <img src="https://thriftly.s3.ap-south-1.amazonaws.com/Logo.svg" className='w-[7vw]' />
        </Link>
      </div>

      <div className='flex items-center'>
        <Link href="/" className=' !text-[1.3vw] mx-[1vw] p-[1vw]'>
          <p>home</p>
        </Link>
        <Link href="/gcp" className=' text-[1.3vw] mx-[1vw] p-[1vw]'>
          <p>reports</p>
        </Link>
        <Link href="/account" className=' text-[1.3vw] mx-[1vw] p-[1vw]'>
          my account
        </Link>
        <Link href="/" className='my-[1vw] mx-[2vw]'>
        < Popover content={popoverContent}>
          <img src='https://thriftly.s3.ap-south-1.amazonaws.com/menu-icon.svg' className='w-[2vw]' />
        </Popover>          
        </Link>
      </div>
      
      
    </header>
  )
}

export default Header;