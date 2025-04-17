import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { logout } from '../redux/slices/userSlice';

const Header = () => {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const [openMenu3, setOpenMenu3] = React.useState(false);
    const { user }  = useSelector((state:any) => state.user)
    const CartItems = useSelector((state:any) => state.cart.cartItems)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user'); 
        dispatch(logout())
        setOpenMenu3(false)
        navigate('/login')
    }
   
    const handleProfile = (id:any) => {
        setOpenMenu3(!openMenu3)
        navigate(`/profile/${id}`)
        
    }
    

    return (
        <>
            <div className='flex bg-green-900 p-4 justify-between text-white items-center px-10'>
                <Link to={'/'} className='text-2xl font-bold flex-4'>Fruit-Basket</Link>
                <div className='flex-2 text-center font-bold hidden  md:flex md:gap-10'>
                    <Link to={'/'}>Home</Link>
                    <div className='cursor-pointer' onClick={() => setOpenMenu2(!openMenu2)}>Categories&nbsp;<span className='text-sm font-normal'>v</span></div>
                   {user?.role === 'admin' && <Link to={'/dashboard'}>Dashboard</Link> }
                    <Link to={'/blogs'}>Blogs</Link>
                </div>
                <div className='flex-2'>
                    <input
                        type='text'
                        placeholder='search'
                        className='bg-white p-1 rounded text-black w-full border outline-none px-2'
                    />
                </div>
                <div className='flex-1'>
                    <div className=' hidden md:flex justify-around  '>
                        <Link to={`/cart/${user?.id}`} className='flex items-center '>
                        <div className='text-sm text-white bg-red-600 rounded-full relative -top-3 -right-7  px-1'>{CartItems.length}</div><FaShoppingCart className='text-2xl'/>
                        </Link>
                        
                        {user ? <div className='items-center flex cursor-pointer' onClick={() => setOpenMenu3(!openMenu3)}><CgProfile className='text-2xl'/> {user.name} </div> : <Link to={  '/login'}
                            className='cursor-pointer '
                        >
                            Login
                        </Link>}
                    </div>
                </div>
                <div className='md:hidden' onClick={() => setOpenMenu(!openMenu)}>menu</div>
            </div>

            {/* Desktop menu */}
            { openMenu3 && <div className='bg-white absolute p-6 top-14 right-7 text-black fixed top-0 right-0 z-50 rounded-lg '>
                <div className='flex flex-col  gap-2 '>
                    <div onClick={()=> handleProfile(user.id)} className='cursor-pointer'>Profile</div>
                    <div onClick={handleLogout} className='cursor-pointer'>Logout</div>
                    
                </div>
            </div>}

            {/* Mobile menu */}
            {openMenu && (
                <div className='flex flex-col md:hidden gap-2 text-center bg-green-800'>
                    <div>Cart</div>
                    {user ? <div onClick={() => setOpenMenu(!openMenu)}>{user.data.name}</div> :
                    <Link to={  '/login'}
                        className='cursor-pointer '
                    >
                        
                    </Link>}
                </div>
            )} 


            {/* category modal */}  
            { openMenu2 && <div className='bg-white px-20 absolute fixed top-14 p-8 right-130 text-black fixed top-0 right-0 z-50 rounded-lg '>
                <div className='flex flex-col  gap-2 '>
                    <Link to={'/category/1'}>Seasonal</Link>
                    <Link to={'/category/2'}>Exotic</Link>
                    <Link to={'/category/3'}>Dry</Link>
                    <Link to={'/category/4'}>Local</Link>
                </div>
            </div>}
        </>
    );
};

export default Header;
