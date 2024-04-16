// @ts-nocheck
// @/components/Layout/MenuBarMobile.js
import React from 'react'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { LuPlusCircle } from "react-icons/lu";
import { MdGroups2 } from "react-icons/md";


export default function MenuBar({ setter }) {
  return (
    <nav className=" z-20 fixed top-0 left-0 right-0 h-[60px] bg-[#FFFFFF]  text-[#6A6A6A] flex [&>*]:my-auto px-2">
      <button
        className="text-4xl flex text-white pr-5 pl-5"
        onClick={() => {
          setter(oldVal => !oldVal);
        }}
      >
        <IoMenu size={25} color='#6A6A6A' />

      </button>



      <Link href="/" className="">
        {/*eslint-disable-next-line*/}
        <div className='w-20 border bg-[#6A6A6A] '>
          <img src="https://ptcdn.info/mobile/logo-mobile-pantip-white.png" width={300} height={300} alt="pantip-logo"></img>
        </div>
      </Link>

    
      <div className='flex bg-[#FFFFFF] text-[#6A6A6A] p-1 my-2 rounded-md border-[1px] items-center ml-10  border-#DDDDDD flex-grow '>
        <input
          type='text'
          className='bg-transparent outline-none flex-grow  p-1'
          placeholder='ค้นหา'
        />
        <FaSearch className='pr-1' />
      </div>
      <div className='justify-end items-center flex  cursor-pointer'>
        <div className='flex space-x-2 h-full items-center hover:bg-[#FFFFFF] px-3'>
          {/* <ChatAltIcon className='h-7 ' /> */}
          <LuPlusCircle size={20} />
          <p>ตั้งกระทู้</p>
        </div>
        <div className='flex space-x-2 h-full items-center hover:bg-[#FFFFFF] px-3'>
          {/* <ViewGridIcon className='h-7' /> */}
          <MdGroups2  size={20}  />
          <p>คอมมูนิตี้</p>
        </div>
      
        <div className='flex space-x-2 h-full items-center hover:bg-[#44416f] px-3'>
          เข้าสู่ระบบ / สมัครสมาชิก
        </div>
      </div>
     
    </nav>
  )
}
