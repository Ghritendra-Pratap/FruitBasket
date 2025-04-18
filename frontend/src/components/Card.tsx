import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import axios from 'axios'
import { serverUrl } from '../api/config'


const Card = (fruit: any ) => {
  const [itemselected , setItemselected] = React.useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const { user } = useSelector((state:any) => state.user)
  const addItemToCart = async(id:any)=>{
    try {
  const response = await axios.post(`${serverUrl}/cart` , {
            userId: user.id,
            fruitId: id,
            quantity: 1
        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
   
}
  const handleAddToCart = (id: any) => {
    addItemToCart(id)
    dispatch(addToCart(fruit.fruit))
    setItemselected(true)

  }
  

  return (
    
       <div className='card rounded-lg p-4  h-auto w-auto ' >
        <Link to={`/fruits/${fruit.fruit.id}`}>
        <img className='image h-40 lg:h-70 w-full rounded-lg' src={`images/${fruit.fruit.image}`} />
        </Link>
        <div className=' bg-white p-2 pb-5 space-y-2'>
        <div className='font-bold text-xl'>{fruit.fruit.name}</div>
        <div className='text-lg'>{fruit.fruit.price}</div>
        
        <button 
    className={`${itemselected ? "bg-green-400" : "bg-pink-600"} text-white p-2 rounded-lg cursor-pointer`} 
    onClick={() => handleAddToCart(fruit.fruit.id)} 
>
    {itemselected ? <div className=''>Item Added</div> : 'Add to Cart'}
</button>

        </div>
      </div>
        
    
  )
}

export default Card