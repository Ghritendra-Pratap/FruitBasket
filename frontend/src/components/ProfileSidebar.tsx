import { RiResetRightLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { useState } from 'react';


const ProfileSidebar = ({options}:any) => {

  const handleClick = (sidebarOption:string) => {
      options(sidebarOption || "orders")
  }
  return (
    <div>
        <div className='flex flex-col items-center text-center space-y-2'>
            <img src="/images/person.jpg" alt='photo' className='h-20 w-20 rounded-full'/>
            <span className=''>hello</span>
            <span className='font-bold'>John Doe</span>
        </div>
        <div className='flex flex-col space-y-5 p-6 '>
            <div className='p-2 pl-4 w-full hover:bg-green-200 rounded-full flex gap-2 items-center'  onClick={() => handleClick("orders")}><RiResetRightLine/>Orders</div>
            <div className='p-2 pl-4 w-full hover:bg-green-200 rounded-full flex gap-2 items-center' onClick={() => handleClick("wishlist")}><FaRegBookmark/>Wishlist</div>
            <div className='p-2 pl-4 w-full hover:bg-green-200 rounded-full flex gap-2 items-center' onClick={() => handleClick("account")}><CgProfile/>Account Details</div>
            <div className='p-2 pl-4 w-full hover:bg-green-200 rounded-full flex gap-2 items-center' onClick={() => handleClick("address")}><BiMap/>Address</div>
            <div className='p-2 pl-4 w-full hover:bg-green-200 rounded-full flex gap-2 items-center' onClick={() => handleClick("settings")}><IoSettingsOutline/>Settings</div>
            <div className='p-2 pl-4 w-full hover:bg-green-200 rounded-full flex gap-2 items-center' onClick={() => handleClick("logout")}><MdOutlinePowerSettingsNew/>Logout</div>
        </div>
        
    </div>
  )
}

export default ProfileSidebar