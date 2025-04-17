
import Slider from 'react-slick'; // Importing Slider from react-slick
import Card from './Card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import React from 'react';
import { serverUrl } from '../api/config';

const Category = (category:any) => {
    
    const [fruits , setFruits] = React.useState([])
  
    const fetchFruits = async () => {
        try {
            const response = await axios.get(`${serverUrl}/fruits/category/${category.category.id}`);
            setFruits(response.data); 
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(() => {
        fetchFruits();
        
    }, [fruits]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: screen.width < 768 ? 2 : 4,
        slidesToScroll: 2,
    };

    return (
        <div className=''>
            <div className='text-3xl text-center font-bold text-green-900 py-5 '>{category.category.name} Fruits</div>
            <Slider {...settings} className='text-green-900'>
                {fruits.map((fruit:any) => (
                    <Card key={fruit.id} fruit={fruit} />
                ))}
            </Slider>
        </div>
            
           
    )
}

export default Category;


