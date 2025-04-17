import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { login } from '../redux/slices/userSlice';
import { serverUrl } from '../api/config';

const RegisterPage = () => {
    const [name , setName] = React.useState('');
    const [email , setEmail] = React.useState('');
    const [password , setPassword] = React.useState('');
    const [confirmPassword , setConfirmPassword] = React.useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async(e:React.FormEvent) => {
        e.preventDefault();
        if(password === confirmPassword){
            const user = {
                name,
                email,
                password
            }
            const resp = await axios.post(`${serverUrl}/auth/register` , user)
            console.log(resp)
            if(resp){
                    dispatch(login(resp.data))
                    localStorage.setItem('user' , JSON.stringify(resp.data.data))
                    navigate('/')
                }
        }
        else{
            alert('passwords do not match')
        }
        
    }
  return (
    <div className='space-y-4 p-4 container mx-auto md:w-1/3 items-center bg-green-50 shadow-2xl shadow-green-600 my-20 py-10 rounded-lg'>

                <div className='text-3xl font-bold text-center '>Register</div>
                <div className='space-y-4 items-center text-center'>
                    <div className=''>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            placeholder='name'
                            className='bg-white p-2 rounded text-black w-full border outline-none'
                        />
                    </div>
                    <div className=''>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type='text'
                            placeholder='email'
                            className='bg-white p-2 rounded text-black w-full border outline-none'
                        />
                    </div>
                    <div className=''>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                            placeholder='password'  
                            className='bg-white p-2 rounded text-black w-full border outline-none'
                        />
                    </div>
                    <div className=''>
                        <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type='password'
                            placeholder='confirm password'  
                            className='bg-white p-2 rounded text-black w-full border outline-none'
                        />
                    </div>
                </div>
                <div className=' text-center'>
                    <button className='bg-green-600 text-white p-2 rounded-lg w-1/3 ' onClick={handleRegister}>Register</button>
                </div>
                <div className=' text-center'>
                
                  Already have an account?
                  <span className='text-blue-600 cursor-pointer ' onClick={() => navigate('/login')}> Login here</span>
              
                </div>
               
    </div>
  )
}

export default RegisterPage

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
