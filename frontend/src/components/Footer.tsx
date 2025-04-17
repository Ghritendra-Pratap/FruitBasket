import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex md:flex-row  p-5 bg-green-900 md:h-50 text-white justify-around items-center '>
        <div className='text-2xl font-bold '>
            Fruit-basket 
        </div>
        <div className='flex flex-col'>
            <div className='font-bold underline text-center'>Options</div>
            <div>Home</div>
            <div>Cart</div>
            <div>Profile</div>
        </div>
        <div className='flex flex-col'>
            <div className='font-bold underline text-center'>Categories</div>
            <div>Seasonal</div>
            <div>Local</div>
            <div>Dry</div>
        </div>
        <div className='flex flex-col'>
            <div className='font-bold underline text-center'>Social</div>
            <div className='flex items-center'> <FaInstagram/> Instagram</div>
            <div className='flex items-center'><FaMeta/> Facebook</div>
            <div className='flex items-center'> <FaXTwitter/> Twitter</div>
        </div>
    </div>
  )
}

export default Footer