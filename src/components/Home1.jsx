import React from 'react'
import { AiFillThunderbolt } from "react-icons/ai";
import { LiaRupeeSignSolid } from "react-icons/lia";

function Home1() {
  return (
    <div className='flex justify-center gap-10 p-5 bg-gradient-to-r from-cyan-300 to-cyan-50 '>
      <div className='text-black w-64'>
          <h1 className='flex text-3xl text-black font-bold items-center' ><LiaRupeeSignSolid />Starting 1,299</h1>
          <h2 className='pt-4 text-xl font-normal'>Exciting launches</h2>
          <h2 className='text-xl font-normal'>from top brands</h2>
          <h2 className='pt-4 text-xl font-normal'>Bluetooth calling &</h2>
          <h2 className='text-xl font-normal'>AMOLED display</h2>
          <div className="pt-4 flex items-center gap-1 font-bold text-2xl">
              <span className='font-bold'>NOISE |</span>
              <span>FIRE</span>
              <AiFillThunderbolt/>
              <span>BOLT</span>
          </div>
      </div>
      <div className='flex w-56 mix-blend-multiply'>
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/m/h/v/-original-imah4qtvzhsjmcad.jpeg?q=70" alt="" />
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/w/f/m/-original-imagrf4gvgfjj8jf.jpeg?q=70" alt=""  />
      </div>
    </div>
  )
}

export default Home1