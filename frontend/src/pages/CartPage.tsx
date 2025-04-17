import axios from 'axios';
import Orange from '../assets/images/orange.jpeg'
import { IoTrashBin } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect , useState} from 'react';
import { addQuantity, getItems} from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeQuantity } from '../redux/slices/cartSlice';
import { serverUrl } from '../api/config';


const CartPage = () => {
    
    const [amount , setAmount] = useState(0)
    const cartItems = useSelector((state:any) => state.cart.cartItems)
    const navigate = useNavigate();
    const { user } = useSelector((state:any) => state.user)
    const dispatch = useDispatch();

    const handlePayment = async (amount: any) => {
        try {
            const res = await fetch(`${serverUrl}/payment/order`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    amount : amount
                })
            });

            const data = await res.json();
            console.log(data);
            handlePaymentVerify(data.data)
        } catch (error) {
            console.log(error);
        }
        
    }


    const handlePaymentVerify = async (data: any) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: data.amount,
            currency: data.currency,
            name: "Fruit Basket",
            description: "Test Mode",
            order_id: data.id,
            handler: async (response:any) => {
                try {
                    const res = await fetch(`${serverUrl}/payment/verify`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        })
                    })

                    const verifyData = await res.json();

                    if (verifyData.message) {
                        toast.success(verifyData.message)
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#5f63b8"
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }
    

    const deleteItem = async(id:any) => {
        await axios.delete(`${serverUrl}/cart/${id}`)
        const items = await axios.get(`${serverUrl}/cart/${user.id}`)
        dispatch(getItems(items.data))
    }

    const fetchCartItems = async()=>{
        const items = await axios.get(`${serverUrl}/cart/${user.id}`)
        dispatch(getItems(items.data))
    }

    

    // const handleCheckout = () => {
    //     if(cartItems.length > 0){
    //         {cartItems.map((item:any) => {
    //             console.log(item)
    //             axios.post(`${serverUrl}/orders/${user.id}` , {
    //                 fruitId: item.fruit.id,
    //                 quantity: item.quantity, 
    //             })
    //             deleteItem(item.id)
    //         })}

            
    //     }
    //     navigate('/order')
    // }

    const decrementQuantity = async(id:any) => {
        dispatch(removeQuantity(id))  
    }

    const incrementQuantity = async(id:any) => {
        dispatch(addQuantity(id))
    }

    useEffect(() => {
        const calculateTotal = () => {
            let total = 0;
            
            if(cartItems.length > 0){
                cartItems.forEach((item: any) => total += item.quantity * item.fruit.price);
            }
            
            setAmount(total);
        };
    
        
        calculateTotal();
    }, [cartItems]); 
    
    useEffect(() => {
        fetchCartItems();
    }, []);

  return (
    <div className='md:container md:mx-auto  p-2 px-5 my-5 rounded-lg'>
         <div className='text-4xl mb-10 mt-5 font-bold'> Your Shopping Cart</div>
        {cartItems.length > 0 ? <div>
        <div className='border p-4 my-4'>
            {amount > 1000 ? <div className='text-green-600'> You are eligible for free delivery</div> : <div className='text-red-600'> You are not eligible for free delivery. add {1000-amount} to get free delivery</div>}
        </div>
       

        <div className='flex justify-center gap-6 mt-10 md:flex-row flex-col'>
            <div className='flex flex-col flex-6 space-y-5'>
                {cartItems.map((item:any) => <div key={item.fruit.id} className=' flex justify-around md:px-10 items-center'>
                    <div className='img flex-1'>
                        <img src={`/images/${item.fruit.image}`} className='h-25 w-25'/>
                    </div>
                    <div className='desc flex-1'>
                        <div className='font-bold text-xl'>{item?.fruit.name}</div>
                        <div className='text-lg'>1kg</div>
                        
                    </div>
                    <div className='flex-1 flex items-center '>
                    <div className=' font-bold text-sm bg-slate-100 p-2 cursor-pointer px-4 rounded-full hover:bg-pink-500 hover:text-white ' onClick={()=>decrementQuantity(item.id)}> - </div>
                    <input type='number' value={item.quantity } className=' h-10 w-10 pl-4  outline-none ' />
                    <div className='font-bold text-sm bg-slate-100 p-2 px-4 rounded-full hover:bg-pink-500 hover:text-white cursor-pointer' onClick={()=>incrementQuantity(item.id)}> + </div>
                    </div>
                    <div className='flex-1 flex items-center'><MdCurrencyRupee/>{item.fruit.price * item.quantity}</div>
                    <span onClick={()=>deleteItem(item.id)}><IoTrashBin className='text-red-600 text-2xl cursor-pointer'/></span>
                </div>)}               
            </div>

        
             {/* //summary */}


            <div className='bg-green-100 p-10 px-10 rounded-lg flex-3 space-y-10'>
                <div className='text-center text-3xl text-green-900 font-bold '>Summary</div>
                <div className='space-y-4 md:px-10'>
                    <div className='flex justify-between'>
                        <div>Subtotal({cartItems.length})</div>
                    <div className='flex items-center'><MdCurrencyRupee/>{amount}</div>
                    </div>
                    <div className='flex justify-between'>
                        <div>Delivery</div>
                        <div className={`flex items-center ${amount > 1000 ? 'text-green-600 text-slate-500 line-through ' : 'text-black'}`}><MdCurrencyRupee/>50</div>
                    </div>
                    <div className='flex justify-between'>
                        <div>Tax</div>
                        <div className='flex items-center'><MdCurrencyRupee/>100</div>
                    </div>
                    <hr className='my-5'/>
                    <div className='flex justify-between font-bold text-xl'>
                        <div>Total</div>
                        <div className='flex items-center'><MdCurrencyRupee/>{amount > 1000 ? amount + 100 : amount + 50 + 100}</div>
                    </div>
                    <div className='mt-5'>
                        <button className='bg-slate-600 text-white w-full p-2 rounded-lg '  onClick={()=> handlePayment(amount > 1000 ? amount + 100 : amount + 50 + 100)}>Checkout</button>
                    </div>

                </div>
            </div>
        </div>
        </div>: <div> No items in cart</div>}
    </div>
  )
}

export default CartPage