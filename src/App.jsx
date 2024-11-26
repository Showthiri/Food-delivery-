import { useState } from 'react'

import './App.css'

import { Navbar } from './Pages/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart } from './Component/Cart'
import { Foodorder } from './Component/Foodorder/Foodorder'
import { Home } from './Pages/Home'
import Offer from './Pages/Offer'
import Footer from './Pages/Footer'
import { Order } from './Pages/Order'
import { North } from './Component/Foodorder/North'
import { Briyani } from './Component/Foodorder/Briyani'
import { Pizza } from './Component/Foodorder/Pizza'
import { Sandwitch } from './Component/Foodorder/Sandwitch'
import { Cooldrinks } from './Component/Foodorder/Cooldrinks'
import { Product } from './Component/Foodorder/Product'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

// import LoginSignup from './Pages/Loginsignup'




function App() {
    const [cart, setCart] = useState([]);

  return (
    <>
    <BrowserRouter>
    {/* <Topbar/> */}
    <Navbar cart={cart}/>
    <div className='app'>
      <Routes>
        <Route path='/'element={<Home/>}/>
        
        <Route path='/Offer' element={<Offer/>}/>
        <Route path='/Foodorder' element={<Foodorder cart={cart} setCart={setCart}/>}/>

        <Route path='/north' element={<North cart={cart} setCart={setCart}/>}/>
        <Route path='/Briyani' element={<Briyani cart={cart} setCart={setCart}/>}/>
        <Route path='/piz' element={<Pizza cart={cart} setCart={setCart}/>}/>
        <Route path='/sandwitch' element={<Sandwitch cart={cart} setCart={setCart}/>}/>
        <Route path='/Cooldrinks' element={<Cooldrinks cart={cart} setCart={setCart}/>}/>


        <Route path='/order' element={<Order/>}/>
<Route path='/logi' element={<Login/>}/>
<Route path='/sig' element={<Signup/>}/>
      




     <Route path='/cart' element={<Cart  cart={cart}/>}/>


      </Routes>
    </div>
    </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
