import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = ({ cart }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = () => {
    setIsCollapsed(true); // Close the navbar when a link is clicked
  };

  return (
    <div className='zomimage'>
      <nav className='navbar navbar-expand-lg '>
        <div className='container bg2-white '>
          <NavLink to='/' className='navh2' onClick={handleLinkClick}>
            <h2>Zomato</h2>
          </NavLink>
          <button 
            className='navbar-toggler bg-white' 
            onClick={handleToggle}
            aria-controls='one' 
            aria-expanded={!isCollapsed}
          >
               {cart.length > 0 && (
            <h5 className='cart-coun'  onClick={handleLinkClick}>{cart.length}</h5>
)}
            <span className='navbar-toggler-icon' ></span>
          </button>        
          <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id='one'>
            <ul className=' ullimk  d-lg-flex   gap-5 '>
              <NavLink to='/' onClick={handleLinkClick}>
                <li className='mt-4 ' activeClassName='active'>HOME</li>
              </NavLink>
              <NavLink to='/Offer' onClick={handleLinkClick}>
                <li className='mt-4 ' activeClassName='active'>OFFER</li>
              </NavLink>
              <NavLink to='/Foodorder' onClick={handleLinkClick}>
                <li className='mt-4 ' activeClassName='active'>FOOD ORDER</li>
              </NavLink>
              {cart.length > 0 && (
                <NavLink to='/cart' onClick={handleLinkClick}>
                  <li className='mt-4' activeClassName='active'>
                    <span className='cart-count'>{cart.length}</span> VIEW CART
                  </li>
                </NavLink>
              )}
              
              <NavLink to='/sig' onClick={handleLinkClick}>
                <button className='btn btn-danger mt-3'>
                  <i className="bi bi-arrow-left-circle">&nbsp; Signup</i>
                </button>
                
              </NavLink>
              <NavLink to='/logi' onClick={handleLinkClick}>
                <button className='btn btn-danger mt-3'>
                  <i className="bi bi-box-arrow-in-right">&nbsp; Login</i>
                </button>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
