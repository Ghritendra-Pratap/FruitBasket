import Carousel from '../components/Carousel'
import Category from '../components/Category'
import {  useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const MainPage = () => {
    
  const [Categories, setCategories] = useState([])

  const fetchCategories=async()=>{    
    try {
        const response = await axios.get(`http://localhost:5001/api/categories`);
        setCategories(response.data); 
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);
  

  return (
    <div>
        <Carousel/>

        {/* Sections */}

        <div className='sections hidden md:flex flex-col md:flex-row  text-2xl text-white text-center gap-2 items-center md:justify-around my-7 '>
            { Categories.length > 0 && Categories.map((category) => {
                return (
                    <Link  to={`/category/${category.id}`} key={category.id} className='bg-pink-600 p-2 w-50 text-center rounded-sm cursor-pointer '>
                        {category.name}
                    </Link>
                )
            })}
        </div> 

        {/* Menu */}
         <div className='container mx-auto bg-slate-100 p-2 px-5 my-5 rounded-lg'>
            {  Categories.length > 0 && Categories.map((category) => {
                return (
                        <Category key={category.id} category={category} />
                )
            })}
         </div>


    </div>
  )
}

export default MainPage