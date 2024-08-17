import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'

const App = () => {

    const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>

  )
}
 
export default App