import React from 'react'
import {Link} from 'react-router-dom'
export const Menu = () => {
  return (
    <>
<div className='menu p-1 text-center'>
    <h1>What's on your mind?</h1>
   <div className="menu-title  d-flex flex-wrap ">
 
   <div className="col">
        {/* <div className="row"> */}
       <Link to={'/Foodorder'}>    <img src="https://th.bing.com/th/id/OIP.sNw8YVhTyWz71a3Tp0KXowHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" alt="" /></Link> 
        {/* </div> */}
        <div className="con">
            <h3>Southindian</h3>
        </div>
    </div>


    <div className="col">
        {/* <div className="row"> */}
        <Link to={'/north'}>          <img src="https://s3-ap-southeast-1.amazonaws.com/s3fileslive/public/gallery/x1920_Indian-Cuisine_1383585.jpeg" alt="" /></Link>
        {/* </div> */}
        <div className="con">
            <h3>North Indian</h3>
        </div>
    </div>

    <div className="col">
        {/* <div className="row"> */}
        <Link to={'/Briyani'}>      <img src="https://th.bing.com/th/id/R.c38468fca44ac5d221063b9bc6074e11?rik=qDyKqxlSTlkrHw&riu=http%3a%2f%2fi1.wp.com%2fwww.relishthebite.com%2fwp-content%2fuploads%2f2015%2f02%2fLAmbBiryani-4.jpg&ehk=kOeLoJpBApOWvv8c5FimGX0ARDZer1hZR2pZ2Fe8jsE%3d&risl=&pid=ImgRaw&r=0" alt="" /></Link>
        {/* </div> */}
        <div className="con">
            <h3>Briyani</h3>
        </div>
    </div>

    <div className="col">
        {/* <div className="row"> */}
        <Link to={'/piz'}>    <img src="https://media-cdn.tripadvisor.com/media/photo-s/28/07/1b/50/dimbil-special-pizza.jpg" alt="" /></Link>
        {/* </div> */}
        <div className="con">
            <h3>Pizza</h3>
        </div>
    </div>

    <div className="col">
    <Link to={'/sandwitch'}>    <img src="https://th.bing.com/th/id/OIP.aVzXqAgRDdmGUSUOvVO0xwHaHa?w=700&h=700&rs=1&pid=ImgDetMain" alt="" />       </Link> 
        <div className="con">
            <h3>Sandwitch</h3>
        </div>
    </div>

    <div className="col">
        {/* <div className="row"> */}
        <Link to={'/Cooldrinks'}>      <img src="https://thumbs.dreamstime.com/z/colorful-cold-drinks-plastic-cups-beach-ice-fresh-fruits-86654557.jpg" alt="" /></Link>
        {/* </div> */}
        <div className="con">
            <h3>Cool drinks</h3>
        </div>
    </div>

   </div>
   <div className='menu-button'>
   <Link to={'/Foodorder'}> <button className='menu-btn'>Explore Menu</button></Link>
   </div>
</div>


    </>
  )
}
