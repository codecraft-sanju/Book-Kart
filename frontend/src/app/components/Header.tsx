import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='bg-white sticky top-0 z-50 border-b'>
      {/* Desktop header */}
      <div className='container w-[80%] mx-auto hidden lg:flex items-center justify-between p-4'>
        <Link href='/'>
          <Image 
            src="/images/web-logo.png"
            width={150} 
            height={50} 
            alt='desktop-logo' 
            className='h-15 w-auto' 
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
