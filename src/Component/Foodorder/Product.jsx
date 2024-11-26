import React from 'react'
import './Product.css'
export const Product = ({product,cart,setCart}) => {



    const addCart = () => {
      setCart([...cart,product])
    };
    const removeCart = () => {
      setCart(cart.filter((c)=>c.id !== product.id));
    };
    console.log(product)
  return (
    <div className='product '>
        <div className="img">
            <img src={product.img} alt="" />
        </div>
        <div className="details">
          <h3>{product.topic}</h3>
          <p>price rs:{product.amt}</p>
          <p>{product.author }</p>


        {cart.includes(product)?
        <button onClick={removeCart} className='btn-remove'>Remove from cart</button>:
        <button onClick={addCart}>Add to cart</button>}
        </div>
       
</div>
)
}