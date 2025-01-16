import React from 'react'
import './Home.css'
import { PiWatchFill } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";

function Home() {
  return (
    <div className='flex justify-between p-2.5 bg-red-500 items-center'>
        <div className='flex gap-2 items-center'>
            <PiWatchFill className='text-2xl text-white'/>
            <h1 className='text-white text-s'>ACME</h1>
        </div>
        <div className='flex gap-9 items-center'> 
          <div className='flex gap-9 text-white'>
            <a href="#" className='hover:underline' >Home</a>
            <a href="#" className='hover:underline'>About</a>
            <a href="#" className='hover:underline'>Products</a>
            <a href="#" className='hover:underline'>Contact</a>
            <a href="#" className='hover:underline'>Signup</a>
          </div>
          <div className='text-2xl items-center'>
            <FaCartShopping/>
          </div>
        </div>
    </div>
  )
}

export default Home