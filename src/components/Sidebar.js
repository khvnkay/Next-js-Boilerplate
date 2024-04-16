// @ts-nocheck
// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SlHome } from 'react-icons/sl'
import { IoMdThumbsUp } from "react-icons/io";
import { PiStarThin } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { BiCalendarStar } from "react-icons/bi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";



// import { BsInfoSquare, BsEnvelopeAt } from 'react-icons/bs'
// import { FaTshirt, FaRedhat } from 'react-icons/fa'

// import logo from '@/img/logo.svg'

export default function Sidebar({ show, setter }) {
  const router = useRouter();

  // Define our base class
  const className = "bg-[#FFFFFF] ] w-[360px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-1 ";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " ml-0 mt-[60px]" : " ml-[-360px] ml-0";

  // Clickable menu items
  const MenuItem = ({ icon, name, route }) => {
    // Highlight menu item based on currently displayed route
    const colorClass = router.pathname === route ? "" : " hover:text-[#6A6A6A]";

    return (
      <Link
        href={route}
        onClick={() => {
          setter(oldVal => !oldVal);
        }}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3  border-b-white/10 ${colorClass}`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">
          {icon}
        </div>
        <div>{name}</div>
      </Link>
    )
  }

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30 `}
      onClick={() => {
        setter(oldVal => !oldVal);
      }}
    />
  )

  return (
    <>

      <div className={`${className}${appendClass} text-[#6A6A6A]  border  	`}>
        <div className="flex flex-col">
          <MenuItem
            name="หน้าแรก"
            route="/"
            icon={<SlHome />}

          />


          <MenuItem
            name="My Feed"
            route="/portfolio"
            icon={<BsFillPersonVcardFill />}

          />
          <MenuItem
            name="Pantip Pick"
            route="/portfolio"
            icon={<IoMdThumbsUp />}

          />
          <MenuItem
            name="Pantip Hitz"
            route="/hats"
            icon={<PiStarThin />}
          />
          <MenuItem
            name="Explore"
            route="/hats"
            icon={<FaRegCompass />}
          />
          <div className="border border-[#b7b6b6]"></div>
          <MenuItem
            name="แลกพอยต์"
            route="/hats"
            icon={<MdStars />}
          />
          <MenuItem
            name="กิจกรรมพันทิป"
            route="/about"
            icon={<BiCalendarStar />}
          />
          <div className="border border-[#b7b6b6] "></div>
          <ul className='p-5'>
            <li>
              <a href="http://google.com">
                กฎ กติกาและมารยาท
              </a>
            </li>
            <li>
              <a href="http://google.com" target="_blank">
                คำแนะนำการโพสต์
              </a>
            </li>
            <li>
              <a href="http://google.com">
                นโยบายเกี่ยวกับข้อมูลส่วนบุคคล
              </a>
            </li>
            <li>
              <a href="http://google.com">
                สิทธิ์การใช้งานของสมาชิก

              </a>
            </li>
            <li>
              <a href="http://google.com">
                ติดต่อทีมงาน Pantip
              </a>
            </li>
            <li>
              <a href="http://google.com">
                ติดต่อลงโฆษณา
              </a>
            </li>
            <li>
              <a href="http://google.com">
                ร่วมงานกับ Pantip
              </a>
            </li>
            <li>
              <a href="http://google.com">
                Download App Pantip
              </a>
            </li>
            <li>
              <a href="http://google.com">
                Pan tip Certified Developer
              </a>
            </li>

          </ul>

        </div>



        <div className='p-5 bottom-10 fixed'>
          © 2024 Internet Marketing co., ltd

        </div>

        <div className='bottom-0 p-5 fixed flex'>

          ติดตาม

          <span>&nbsp;&nbsp;</span>


          <div className='flex'>
            <FaFacebookSquare />
            <span>&nbsp;&nbsp;</span>
            <FaTwitterSquare />
            <span>&nbsp;&nbsp;</span>
            <FaYoutube />
            <span>&nbsp;&nbsp;</span>
            <FaInstagram />  <span>&nbsp;&nbsp;</span>

            <FaTiktok />
          </div>




        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  )
}
