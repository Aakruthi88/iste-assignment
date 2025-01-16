import React from 'react'
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { PiWatchFill } from "react-icons/pi";

function Footer() {
  return (
    <div className='bg-black text-white'>
      <div className='flex items-center justify-between '>
        <div className='flex items-center m-8 gap-1 '>
        <PiWatchFill className='text-2xl'/>
          <h3>ACME</h3>
        </div>
        <div className='flex items-center mr-12 gap-1 text-2xl'>
        <FaTwitterSquare />
        <FaFacebookSquare />
        <FaInstagramSquare />
        </div>
      </div>
      <div className='flex  justify-evenly m-8'>
       <ul >
        <li className='font-semibold text-2xl'>Get to Know Us</li>
        <div className='font-thin pt-2 text-center'>
        <li className='pt-1'>About Us</li>
        <li className='pt-1'>Careers</li>
        <li className='pt-1'>Press Releases</li>
        <li className='pt-1'>Blog</li>
        </div>
       </ul>
       <ul>
        <li className='font-semibold text-2xl'>Connect with Us</li>
        <div className='font-light pt-2 text-center'>
        <li className='pt-1'>Twitter</li>
        <li className='pt-1'>Facebook</li>
        <li className='pt-1'>Instagram</li>
        </div>
       </ul>
       <ul>
        <li className='font-semibold text-2xl'>Make money with Us</li>
        <div className='font-light pt-2 text-center'>
        <li className='pt-1'>Sell on Our Platform</li>
        <li className='pt-1'>Become an Affiliate</li>
        <li className='pt-1'>Advertise Your Products</li>
        </div>
       </ul>
       <ul>
        <li className='font-semibold text-2xl'>Let  Us  Help  You</li>
        <div className='font-extralight pt-2 text-center'>
        <li className='pt-1'>Your Account</li>
        <li className='pt-1'>Your Orders</li>
        <li className='pt-1'>Shipping Rates & Policies</li>
        <li className='pt-1'>Returns & Replacements</li>
        <li className='pt-1'>Help</li>
        </div>
       </ul>
      </div>
      <h2 className='text-center pt-3 pb-6'>@2024 ACME Company.All rights reserved.</h2>
    </div>
  )
}

export default Footer