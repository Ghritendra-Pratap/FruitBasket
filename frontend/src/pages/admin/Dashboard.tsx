import React from 'react'
import SidebarAdmin from './SidebarAdmin'
import MainAdmin from './MainAdmin'

const Dashboard = () => {
  return (
    <div className='container mx-auto my-10'>
        <div className='font-bold text-4xl my-10 '> Dashboard </div>
        <div className='flex'>
            <div className='flex-3 container mx-auto'>
                <SidebarAdmin/>
            </div>
            <div className='flex-8 ml-10 bg-slate-200 p-5 rounded-lg'>
                <MainAdmin/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard