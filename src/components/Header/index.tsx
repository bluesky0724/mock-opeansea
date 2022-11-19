import React from "react";
import logo from "./opensea.svg";

import {
  ShoppingCart,
  AccountBalanceWalletOutlined,
  Menu,
  FilterList,
  AccountCircleOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
function Header() {
  const [searchInput, setSearchInput] = React.useState("");

  return (
    <div className='header flex flex-row p-[16px] items-center'>
      {/* logo */}
      <div className='flex flex-row ml-[16px] items-center'>
        <img src={logo} className='h-[40px] w-[40px]' alt='logo' />
        <p className='ml-[10px] font-extrabold text-2xl'>OpenSea</p>
      </div>
      <div className='w-full ml-auto'>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-500 dark:text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </div>
          <input
            type='search'
            id='default-search'
            className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search items, collections, and accounts'
            required
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
        </div>
      </div>
      <div className='hidden xl:flex flex-row w-auto'>
        <div className='px-[16px]'>
          <a className='cursor-pointer font-bold text-[16px]'>Explore</a>
        </div>
        <div className='px-[16px]'>
          <a className='cursor-pointer font-bold text-[16px]'>Drops</a>
        </div>
        <div className='px-[16px]'>
          <a className='cursor-pointer font-bold text-[16px]'>Stats</a>
        </div>
        <div className='px-[16px]'>
          <a className='cursor-pointer font-bold text-[16px]'>Resources</a>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='hidden flex-row lg:flex w-auto mx-[16px]'>
          <AccountCircleOutlined fontSize='large' />
        </div>
        <div className='hidden flex-row lg:flex w-auto mx-[16px]'>
          <AccountBalanceWalletOutlined fontSize='large' />
        </div>
        <ShoppingCartOutlined className='mx-[16px]' fontSize='large' />
        <div className='flex flex-row xl:hidden w-auto mx-[16px]'>
          <Menu fontSize='large' />
        </div>
      </div>
    </div>
  );
}

export default Header;
