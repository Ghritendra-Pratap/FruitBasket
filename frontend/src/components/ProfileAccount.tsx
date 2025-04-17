import React from 'react'

const ProfileAccount = () => {
  return (
    <div className=''>
        <div className='p-4 pl-6 w-full font-bold text-xl'>
            Account Details
        </div>
        <div className=' flex flex-col space-y-5 p-5  '>
        <div className=''>
            <input type='text' placeholder='name' className='bg-white p-2 rounded text-black w-full border outline-none'/>
        </div>
        <div className=''>
            <input type='email' placeholder='email' className='bg-white p-2 rounded text-black w-full border outline-none'/>
        </div>
        <div className=''>
            <input type='password' placeholder='password' className='bg-white p-2 rounded text-black w-full border outline-none'/>
        </div>
        <div className=''>
            <input type='text' placeholder='address' className='bg-white p-2 rounded text-black w-full border outline-none'/>
        </div>
        <button type='submit' className=' w-20 bg-green-600 text-white p-2 rounded'>Update</button>

        </div>
        
    </div>
  )
}

export default ProfileAccount