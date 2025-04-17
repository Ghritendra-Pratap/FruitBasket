import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch , useSelector } from 'react-redux';
import { login } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../api/config';


const LoginPage = () => {
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async() => {
    
    const user = await axios.post(`${serverUrl}/auth/login`, {
        email , password
    })
    if(user){
        dispatch(login(user.data))
        localStorage.setItem('user' , JSON.stringify(user.data.data))
        navigate('/')
    }
     
   
}
  return (
          <div className='space-y-4 p-4 container mx-auto md:w-1/3 items-center bg-green-50 shadow-2xl shadow-green-600 my-20 py-10 rounded-lg'>
              <div className='text-3xl font-bold text-center '>Login</div>
              <div className='space-y-4 items-center text-center'>
                  <div className=''>
                      <input
                          type='text'
                          placeholder='email'
                          className='bg-white p-2 rounded text-black w-full border outline-none'
                          onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>
                  <div className=''>
                      <input
                          type='password'
                          placeholder='password'
                          className='bg-white p-2 rounded text-black w-full border outline-none'
                          onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                  <button 
                      onClick={handleSubmit} className='p-2 px-10 bg-pink-600 text-white rounded-lg cursor-pointer'>
                      Login
                  </button>
              </div>
              <span className=''>
                  Don't have an account?
                  <span className='text-blue-600 cursor-pointer ' onClick={() => navigate('/register')}> Register here</span>
              </span>
          </div>
    
  
  )
};

export default LoginPage;
