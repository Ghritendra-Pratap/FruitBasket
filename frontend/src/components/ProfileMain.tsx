import React from 'react'
import Orange from '../assets/images/orange.jpeg'

const ProfileMain = () => {
  return (
    <div className='flex flex-col space-y-2'>
        <div className='p-4 pl-6 w-full font-bold text-xl'>
            My Orders
        </div>
        <hr/>
        <div className='flex flex-col m-5 gap-10'>
            <div className='flex justify-between items-center'>
            <img src="" alt='photo' className=' h-20 w-20 rounded-md'/>
            <span className='flex-1'>Apple</span>
            <span className='flex-1'>Quantity : 3</span>
            <span className='flex-1'>Price : 100</span>
            <span className='flex-1'>Order Date: 1/1/2023</span>
            </div>
            <div className='flex justify-between items-center'>
            <img src="" alt='photo' className=' h-20 w-20 rounded-md'/>
            <span className='flex-1'>Apple</span>
            <span className='flex-1'>Quantity : 3</span>
            <span className='flex-1'>Price : 100</span>
            <span className='flex-1'>Order Date: 1/1/2023</span>
            </div>
            <div className='flex justify-between items-center'>
            <img src="" alt='photo' className=' h-20 w-20 rounded-md'/>
            <span className='flex-1'>Apple</span>
            <span className='flex-1'>Quantity : 3</span>
            <span className='flex-1'>Price : 100</span>
            <span className='flex-1'>Order Date: 1/1/2023</span>
            </div>
        </div>
    </div>
  )
}

export default ProfileMain