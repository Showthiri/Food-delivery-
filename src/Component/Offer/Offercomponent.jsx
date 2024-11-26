import React from 'react'
import {Link} from 'react-router-dom'
const Offercomponent = () => {
  return (
    <>
    <div className='offersection offer-sm-5'>
    <div className='offer text-white'>
        <h4><span>Get</span>30% off</h4>
        <p><span>RESTAURANT</span> COMBO OFFERS</p>
    </div>
    </div>

    <div className="offerimg d-flex flex-wrap justify-content-center gap-4 m-5">
  <Link to={'/piz'}>   <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/ada9dd71-dbe7-4e21-928a-3388f7cef91b_559820.jpg" alt="" /></Link> 
    <Link to={'/Cooldrinks'}>  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/f4ac5814-9ffc-4921-9f3c-216d1d49461f_81246.JPG" alt="" /></Link>
    <Link to={'/piz'}><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/06315894-32fc-4d85-9bc6-9360f7827b6d_80481.JPG" alt="" /></Link>
    <Link to={'/Cooldrinks'}><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/on5g40cnuvyycahewuqs" alt="" /></Link>
    <Link to={'/Cooldrinks'}> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395" alt="" />     </Link>
    <Link to={'/Cooldrinks'}><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/253178fa1b6a22b7a0cdc1ab120db628" alt="" />  </Link> 
</div>

 <div className="offerpara m-5 ">
  <h4>Get the best offers on the food from top restaurants near you</h4>
  <p className=' text-black'>Get ready for a scrumptious adventure filled with unbeatable offers on your favourite foods and restaurants. Whether you're in the mood for a cheesy pizza, a sizzling burger, or a delightful bowl of pasta, now is the perfect time to satisfy your cravings while saving big.</p>
 </div>
    </>

  )
}

export default Offercomponent