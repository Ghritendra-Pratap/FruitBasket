import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { serverUrl } from '../api/config';

const ByCategory = () => {
    const [fruits, setFruits] = React.useState([])
    const [category, setCategory] = React.useState([])
     
   const id = useParams().id
   

   const fetchCategory = async () => {
    const response = await axios.get(`${serverUrl}/categories/${id}`)
    setCategory(response.data)
   
   }

   const fetchFruitsbyCategory = async () => {
    const response = await axios.get(`${serverUrl}/fruits/category/${id}`)
    setFruits(response.data)
   }

   useEffect(() => {
        fetchFruitsbyCategory();
   },[])
   useEffect(() => {
    fetchCategory();
},[])
   
   
   
    // const fruits = [
    //     {
    //         id: 1,
    //         name: 'apple',
    //         price: 100
    //     },
    //     {
    //         id: 2,
    //         name: 'mango',
    //         price: 200
    //     },
    //     {
    //         id: 3,
    //         name: 'banana',
    //         price: 50
    //     },
    //     {
    //         id: 4,
    //         name: 'orange',
    //         price: 80
    //     }, {
    //         id: 5,
    //         name: 'apple',
    //         price: 100
    //     },
    //     {
    //         id: 6,
    //         name: 'mango',
    //         price: 200
    //     },
    //     {
    //         id: 7,
    //         name: 'banana',
    //         price: 50
    //     },
    //     {
    //         id: 8,
    //         name: 'orange',
    //         price: 80
    //     },
    // ];
    
  return (
    <div className='flex p-10 my-10 space-x-10 bg-slate-50 container mx-auto'>
        <div className='flex-1 space-y-10 '> 
            <div className='font-bold text-2xl text-center '>Filters</div>
            <div className='my-4 bg-green-200 p-5 my-14 rounded-md h-100 space-y-4 '>
                
                <div className='flex justify-between items-center'>
                <div className='font-bold flex-1' >Price:</div>
                    <div className='flex gap-2 items-center'><span className='font-bold-600'></span><input type="number" className='w-20 bg-white p-1 rounded-md text-black outline-none' placeholder='min'/></div>
                    -
                    <div className='flex gap-2 items-center'><span className='font-bold-600'></span><input type="number" className='w-20 bg-white p-1 rounded-md text-black outline-none' placeholder='max'/></div>
                </div>
                <div className='flex justify-between items-center'>
                <div className='font-bold flex-1'>Rating:</div>
                </div>
                <div className='flex justify-between items-center'>
                <div className='font-bold flex-1'>Category:</div>
                <div className=''><input type='text' className='w-full bg-white p-1 rounded-md text-black outline-none'/></div>
                </div>
                <div className='flex justify-between items-center'>
                <div className='font-bold flex-1'>Sort by:</div>
                <div className=''><input type='text' className='w-full bg-white p-1 rounded-md text-black outline-none'/></div>
                </div>
                
            </div>

        </div>
        <div className='flex-3 items-center space-y-10 '>
            <div className='font-bold text-green-600 text-2xl text-center'>{category.name } Fruit </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:grid-cols-3'>
    
                {fruits.map((fruit) => (
                    <Card key={fruit.id} fruit={fruit} />
                ))}
            
            </div>
        </div>
    </div>
  )
}

export default ByCategory