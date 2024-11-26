import React, { useState } from 'react'
import data from './Offerfood.json'
import data1  from './Food.json'
import { Product } from '../Foodorder/Product'
import './Foodorder.css'
import { Order } from '../../Pages/Order'

export const Foodorder = ({cart, setCart}) => {
    const [products]=useState(data)
    const [productss]=useState(data1)
     
  return (
    <>
    <Order/>


    <section id='south'>

    <div className='foodorder'>
      
    <div className='product-container '>
        {products.map((product)=>(
          <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
        ))}
    </div>

        </div>
        </section>

             </>

  
  )
}
