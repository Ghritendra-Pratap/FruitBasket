import React from 'react'
import ProfileSidebar from '../components/ProfileSidebar'
import ProfileMain from '../components/ProfileMain'
import ProfileAccount from '../components/ProfileAccount'

const ProfilePage = () => {
    const [data, setData] = React.useState("")

    const handleOptions = (option:string) => {
        setData(option)
    }



  return (
    <div className='container mx-auto '>
        <div className=' h-40 w-full  bg-pink-700 text-white mt-10 flex items-center justify-center text-2xl font-bold rounded-lg'>
            My account
        </div>
        <div className='flex gap-10'>
            <div className='flex-1 bg-gradient-to-r from-slate-50 to-green-100 p-5 my-5 rounded-xl'>
                <ProfileSidebar options= {handleOptions}/>
            </div>
            <div className='flex-3'>
                <div className=' w-full bg-slate-50  mt-5 rounded-xl'>
                    {data === "orders"  && <ProfileMain/>}
                    {data === "account" && <ProfileAccount/>}
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProfilePage