import React, { useState } from 'react'

import data3 from './Pizza.json'
import { Product } from '../Foodorder/Product'
import './Foodorder.css'
import { Order } from '../../Pages/Order'

export const Pizza = ({cart, setCart}) => {
    const [productss]=useState(data3)
  return (
    <>
    <Order/>
    <div className='foodorder'>
    <div className='product-container '>
     {productss.map((product)=>(
         <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
     ))}
   </div>
 </div>
         </>

  )
}
