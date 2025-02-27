import Image from 'next/image';
import { Link } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <header className='bg-white sticky top-0 z-50 border-b'>
      {/* desktop header */}
      <div className='container w-[80%] mx-auto hidden lg:flex items-center justify-between p-4'>
        <Link href='/' className='flex items-center '>
          <Image 
            src='/images/web-logo.png' 
            width={450} 
            height={100} 
            alt='web-logo' 
            className='h-15 w-auto' 
          />
        </Link>
        <div>
          {/* Add any other navigation items here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
