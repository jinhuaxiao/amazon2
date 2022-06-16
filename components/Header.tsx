import Image from 'next/image'
import React from 'react'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
function Header() {
  return (
    <header>
        {/* Top nav*/}
        <div className='flex  items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image 
                width={150} height={40} 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                objectFit='contain'
                className='cursor-pointer'
                />
            </div>

            {/* Search */}
            <div className='hidden sm:flex flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                <input className='p-2 h-full w-6 flex-grow focus:outline-none flex-shrink rounded-l-md' type="text" />
                <SearchIcon className='h-12 p-4'/>

            </div>

            {/* right */}
            <div className='flex items-center space-x-6 text-xs  cursor-pointer cmx-6 text-white whitespace-nowrap'>
                <div className='link'>
                    <p> Hello ,xiaojinhua</p>
                    <p className='font-extrabold md:text-sm'>Account & list</p>

                </div>

                <div className='link'>
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm'> & orders</p>
                </div>

                <div className='relative link flex items-center'>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 rounded-full text-center text-black font-bold bg-yellow-500'>0</span>
                    <ShoppingCartIcon  className='h-10 '/>
                    <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                </div>

            </div>
        </div>

        {/* Bottom nav*/}
        <div className='flex items-center space-x-3 p-2 pl-6  bg-amazon_blue_light text-white'>
            <p className='link flex items-center'>
                <MenuIcon  className='h-4 mr-1'/>
                All
            </p>

            <p className='link'>Prime video</p>
            <p className='link'>Amazon Business</p>
            <p className='link'>Today's Deals</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Foot & Grocery</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Tookit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>

        </div>

        <div>

        </div>
    </header>
  )
}

export default Header