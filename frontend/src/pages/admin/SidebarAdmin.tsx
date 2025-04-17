import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SidebarAdmin = () => {

    const handleClick = (sidebarOption:string) => {
        
    }
    
  return (
     <div className='bg-green-100 rounded-lg '>
            
            <div className='flex flex-col space-y-5 p-6 '>
                <div className='p-2 pl-4 w-full hover:bg-green-200 rounded-full flex gap-2 items-center'  onClick={() => handleClick("fruits")}>Fruits</div>
                <div className='p-2 pl-4 w-full hover:bg-green-200 rounded-full flex gap-2 items-center' onClick={() => handleClick("users")}>Users</div>
            <div className='p-2 pl-4 w-full hover:bg-green-200 rounded-full flex gap-2 items-center' onClick={() => handleClick("orders")}>Orders</div>

            </div>
            
        </div>
  )
}

export default SidebarAdmin