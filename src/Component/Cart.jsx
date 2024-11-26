import React, { useEffect, useState } from 'react';
import './Cart.css';

export const Cart = ({ cart, setCart }) => {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // Either 'login' or 'signup'

  const Decrement = () => {
    setNum(num - 1);
  };

  const increment = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleOrderConfirmation = () => {
    if (address) {
      // Trigger authentication modal if not logged in
      setShowAuthModal(true);
    } else {
      alert('Please enter your address to confirm the order.');
    }
  
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (authMode === 'login') {
      // Handle login logic here
      alert('Login Successful!');
    } else {
      // Handle signup logic here
      alert('Account Created Successfully!');
    }
    setOrderConfirmed(true);
    setShowAuthModal(false);
  };

  const handleAuthSwitch = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };

  return (
    <div className="cartpage text-center">
      <h1 className="cart-heading">Cart Page</h1>
      
      <div className="cart-container">
        <div className="head ">
          <h2>Image</h2>
          <h2>Name</h2>
          <h2>Total</h2>
        
         
        </div>
    <hr />
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img-cart">
              <img src={product.img} alt="product" />
            </div>
            <div className="cart-amt">
              <h4>{product.topic}</h4>
            </div>
            
               <div className="cart-amt">
              <h4>
                <img
                  src="https://img.icons8.com/?size=100&id=87749&format=png&color=000000"
                  alt="Amount Icon"
                  height="18px"
                />
                {product.amt}
              </h4>
            </div>
          </div>
          
          
        ))} <br /><br />
       <h3>total amount Rs.{total}</h3>        
        {/* Address Input */}
        <div className="address-section ">
          
          <h4>Enter Delivery Address</h4>
          <textarea
            value={address}
            
            onChange={handleAddressChange}
            placeholder="Enter your address here..."
            rows={3}
           cols={30}
          ></textarea>
        </div>

        {/* Order Confirmation */}
        {!orderConfirmed ? (
          <button onClick={handleOrderConfirmation} className="confirm-order-btn">
            Confirm Order
          </button>
        ) : null} 

        {/* Auth Modal */}
        {showAuthModal && (
          <div className="auth-modal-overlay">
            <div className="auth-modal">
              <h2>{authMode === 'login' ? 'Login' : 'Create Account'}</h2>
              <form onSubmit={handleAuthSubmit}>
                {authMode === 'signup' && (
                  <div>
                    <label htmlFor="username">Username : &nbsp;</label>
                    <input type="text" id="username" required />
                  </div>
                )}
                <br />
                <div>
                  <label htmlFor="email">Email : &nbsp;</label>
                  <input type="email" id="email" required />
                </div><br />
                <div>
                  <label htmlFor="password">Password : &nbsp;</label>
                  <input type="password" id="password" required />
                </div>
               <center> <button className='login' type="submit">{authMode === 'login' ? 'Login' : 'Create Account'}</button></center>
              </form>
              <center><button className="switch-auth-mode" onClick={handleAuthSwitch}>
                {authMode === 'login' ? 'Don’t have an account? Sign Up' : 'Already have an account? Login'}
              </button></center>
              <button className="close-auth-modal" onClick={() => setShowAuthModal(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
