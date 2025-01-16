import React from 'react'
import {useState,useEffect } from 'react';
import { LiaRupeeSignSolid } from "react-icons/lia";

function Products() {
  const [list,setlist]=useState([])
  useEffect(()=>{
    fetch('db.json')
    .then((res)=>res.json())
    .then((data)=>setlist(data.watches))
    .catch((err)=>console.log(err))
  },[])
    
  return (
    <div>
      <h1 className='font-semibold text-xl '>Recommended products </h1>
      <div className='flex gap-3 p-3'>
        {
            list
            .filter((item)=>item.sale===false)
            .map((item,index)=>(
              <div key={index} className='card w-72 items-center p-3 border border-gray-500 rounded-lg shadow-sm hover:shadow-xl flex flex-col items-center'>
                  <img src={item.image_url} alt="" className="w-48 h-48 object-contain mb-3 shadow-md"/>
                  <h1 className='p-1'>{item.name} </h1>
                  <h1 className='p-1'><span className='font-bold text-l'>Brand:</span> {item.brand}</h1>
                  <h1 className='p-1 flex items-center'><span><LiaRupeeSignSolid /></span>{Math.round(item.price*(1-item.offer/100))}</h1>
                  <h1 className='p-1 flex items-center'>MRP:<span><LiaRupeeSignSolid /></span><span className='line-through text-s'>{item.price}</span><span className='text-red-500'>{item.offer}%off</span></h1>
                </div>
            ))
        }
      </div>
      <h2 className='font-semibold text-xl flex items-center'>Limited offers</h2>
      <div className="flex gap-3 p-3">
      {
            list
            .filter((item)=>item.sale===true)
            .map((item,index)=>(
              <div key={index} className='card w-72  p-3 border border-gray-500 rounded-lg shadow-sm hover:shadow-xl flex flex-col items-center'>
                  <img src={item.image_url} alt="" className='w-48 h-48 object-contain mb-3 shadow-md' />
                  <h1 className='p-1'>{item.name}</h1>
                  <h1 className='p-1'> <span className="font-bold">Brand:</span> {item.brand}</h1>
                  <h1 className='p-1 flex items-center'><span><LiaRupeeSignSolid /></span>{Math.round(item.price*(1-item.offer/100))}</h1>
                  <h1 className='p-1 flex items-center'>MRP:<span><LiaRupeeSignSolid /></span><span className='line-through text-s'>{item.price}</span><span className='text-red-500'>{item.offer}%off</span></h1>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Products