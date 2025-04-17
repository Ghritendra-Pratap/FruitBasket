import Orange from '../assets/images/orange.jpeg'
import Slider from 'react-slick'; // Importing Slider from react-slick
import Card from '../components/Card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect , useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { serverUrl } from '../api/config';

const FruitDetail = () => {
    const user = useSelector((state:any) => state.user.user)
    const [fruit, setFruit] = useState({})
    const {id} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchFruit = async () => {
        try {
            const response = await axios.get(`${serverUrl}/fruits/${id}`);
            setFruit(response.data); 
            
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        fetchFruit();
        
    }, []);

    const fruits = [
        {
            id: 1,
            name: 'apple',
            price: 100
        },
        {
            id: 2,
            name: 'mango',
            price: 200
        },
        {
            id: 3,
            name: 'banana',
            price: 50
        },
        {
            id: 4,
            name: 'orange',
            price: 80
        },
    ];

    const addItemToCart = async()=>{
        try {
            const response = await axios.post('${serverUrl}/cart' , {
                userId: 1,
                fruitId: fruit.id,
                quantity: 1
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
        navigate('/cart')
    }
    const handleAddToCart = () => {
        addItemToCart()
        dispatch(addToCart(fruit))
        navigate(`/cart/${user.id}`)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: screen.width < 768 ? 4 : 8,
        slidesToScroll: 8,
    };
  return (
    <div className='container mx-auto bg-slate-50'>
    <div className='flex flex-col md:flex-row justify-center md:my-10 md:bg-slate-100 rounded-3xl p-5 gap-5 '>
        <div className='flex-1'>
            <img src={`images/${fruit.image}`} alt='photo' className='rounded-lg '/>
        </div>
        <div className='space-y-4 flex-2'>
        <div className='text-5xl font-bold'>{fruit.name}</div>
        <div className='text-3xl'>{fruit.price}</div>
        <div className='text-xl'> <span className='font-bold'>Description : </span> <br/>{fruit.description}</div>
        <button className='bg-pink-600 p-2 w-40 text-center rounded-sm cursor-pointer my-5 text-white' onClick={handleAddToCart}>Add to Cart</button>  
        </div>
              
    </div>

    <div className='p-4'>
        <div className='text-2xl font-bold'> Health Benefits of Orange</div>
        <div>
            <ul className='text-xl'>
                <li>It is a good source of Vitamin C</li>
                <li>It is a good source of Vitamin C</li>
                <li>It is a good source of Vitamin C</li>
                <li>It is a good source of Vitamin C</li>
                <li>It is a good source of Vitamin C</li>
                <li>It is a good source of Vitamin C</li>
            </ul>
        </div>

    </div>

    <div className='  rounded-3xl p-5 my-5'>
        <div className='text-3xl font-bold'>Similar Fruits</div>
        <Slider {...settings}>
                {fruits.map((fruit) => (
                    <Card key={fruit.id} fruit={fruit} />
                ))}
            </Slider>
    </div>
    </div>
  )
}

export default FruitDetail