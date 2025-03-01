import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, SearchCheckIcon, User } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
//import { DropdownMenu } from '@radix-ui/react-dropdown-menu';

const Header = () => {

  const user = {
    profilePicture: "",
    name: "",
    email:""
  }
  const userPlaceholder = ''
  const menuItems = {
    ...(user && user ? [
      {
        href: 'account/profile',
        content: (
          <div className='flex space-x-4 items-center p-2 border-b'>
 <Avatar className='w-12 h-12 -ml-2 rounded-full'>
              {user?.profilePicture ? (
                <AvatarImage alt='user_image'></AvatarImage>
              ) : (
                  <AvatarFallback>{userPlaceholder}</AvatarFallback>
              )}
            </Avatar>
            <div className='flex flex-col'>
              <span className='font-semibold text-md '>
                {user.name}
              </span>
              <span className='text-xs text-gray-500'>
                {user.email}
              </span>
            </div>
          </div>
        )
      }
    ]:? ())
  }
  return (
    <header className="bg-white sticky top-0 z-50 border-b">
      {/* Desktop header */}
      <div className="container w-[80%] mx-auto hidden lg:flex items-center justify-between p-4">
        <Link href="/">
          <Image
            src="/images/web-logo.png"
            width={150}
            height={50}
            alt="desktop-logo"
            className="h-15 w-auto"
          />
        </Link>
        <div className="flex flex-1 items-center justify-center max-w-xl px-4 ">
          <div className="relative w-full">
            <input
              className="w-full pr-14"
              type="text"
              placeholder="Book Name/ Author / subject / publisher"
            //  value=''
            //  onChange={() => {
                
            //  }}
            />
            <Button size='icon' variant='ghost' className='absolute right-0 top-1/2 -translate-y-1/2'>
            <Search className='h-5 w-5'/></Button>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Link href='/book-sell'>
            <Button variant='secondary' className='bg-yellow-400 text-gray-900 hover:bg-yellow-500'>
              Sell Used Books
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost'>
                <Avatar className='w-8 h-8 rounded-full'>
                  {user?.profilePicture ? (
                    <AvatarImage alt='user_image'></AvatarImage>
                  ) : userPlaceholder ? (
                      <AvatarFallback>{userPlaceholder}</AvatarFallback>
                  ) : (
                    <User className='ml-2 mt-2' />
                  )}
                </Avatar>
                My Account
</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-80 p-2 '>

            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </header>
  );
};

export default Header;
