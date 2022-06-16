import Image from 'next/image'
import React from 'react'
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
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
            <div className='flex items-center space-x-2 text-white'>
                <div className=''>
                    <p> Hello ,xiaojinhua</p>
                    <p>Account & list</p>

                </div>

                <div>
                    <p>Returns</p>
                    <p> & orders</p>
                </div>

                <div>
                    <ShoppingCartIcon  className='h-10 '/>
                </div>

            </div>
        </div>

        {/* Bottom nav*/}
        <div>

        </div>

        <div>

        </div>
    </header>
  )
}

export default Header