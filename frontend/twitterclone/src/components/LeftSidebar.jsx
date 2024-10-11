import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const LeftSidebar = () => {
  return (
    <div className='w-[20%]'>
      <div>
        <div>
          <img className="ml-4" width={"24px"} src="https://www.citypng.com/public/uploads/preview/hd-twitter-x-new-logo-png-735811696672788haniphkh2j.png" alt='Twitter-Logo' />
        </div>
        <div className="my-4">
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <CiHome />
            </div>
            <h1 className="font-bold text-base ml-2">Home</h1>
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <CiHashtag />
            </div>
            <h1 className="font-bold text-base ml-2">Explore</h1>
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <IoIosNotificationsOutline />
            </div>
            <h1 className="font-bold text-base ml-2">Notifications</h1>
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <CiUser />
            </div>
            <h1 className="font-bold text-base ml-2">Profile</h1>
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <CiBookmark />
            </div>
            <h1 className="font-bold text-base ml-2">Bookmarks</h1>
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <CiLogout />
            </div>
            <h1 className="font-bold text-base ml-2">Logout</h1>
          </div>
          <button className='px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>
          
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar