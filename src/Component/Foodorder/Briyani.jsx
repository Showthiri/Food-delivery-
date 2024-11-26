import React, { useState } from 'react'

import data2 from './Briyani.json'
import { Product } from '../Foodorder/Product'
import './Foodorder.css'
import { Order } from '../../Pages/Order'
export const Briyani = ({cart, setCart}) => {

    const [productss]=useState(data2)
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
