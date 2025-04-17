import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import FruitDetail from './pages/FruitDetail'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './redux/slices/userSlice'
import SuccessPage from './pages/SuccessPage'
import RegisterPage from './pages/RegisterPage'
import ByCategory from './pages/ByCategory'
import ProfilePage from './pages/ProfilePage'
import Dashboard from './pages/admin/Dashboard'


function App() {
 const dispatch = useDispatch()
 const { user } = useSelector((state:any) => state.user)

const fetchUser = async () => {
  const users= localStorage.getItem('user')
  if(users){
    dispatch(login(JSON.parse(users)))
  }
}
 useEffect(() => {
  fetchUser()
 }, [])
  
  return (
    
    <Router>
      <div className="flex flex-col min-h-screen">
  <div className="flex-grow">
  <Header/>
      <Routes> 
        <Route path="/" element={<MainPage/>}/>
        <Route path="/fruits/:id" element={<FruitDetail />}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cart/:id" element={ user ?  <CartPage/> : <LoginPage/>}/>
        <Route path="/order" element={ user ? <SuccessPage/> : <LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/category/:id' element={<ByCategory/>}/>
        <Route path='/profile/:id' element={<ProfilePage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
  </div>
  <Footer />
</div>
      
      
      
      
      
    </Router>
        
    
  )
}

export default App
